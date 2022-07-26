use digital_asset_types::{dapi::asset::get_asset, rpc::Asset};
use sea_orm::{ConnectionTrait, DbBackend, Statement};
use {
    crate::api::ApiContract,
    crate::config::Config,
    crate::validation::validate_pubkey,
    crate::DasApiError,
    async_trait::async_trait,
    digital_asset_types::{
        dapi::{assets_by_owner::*, change_logs::*},
        rpc::{
            filter::{AssetSorting, OfferSorting},
            response::{AssetList, ListingsList, OfferList},
            AssetProof,
        },
    },
    sea_orm::{DatabaseConnection, DbErr, SqlxPostgresConnector},
    sqlx::postgres::PgPoolOptions,
};

pub struct DasApi {
    db_connection: DatabaseConnection,
}

impl DasApi {
    pub async fn from_config(config: Config) -> Result<Self, DasApiError> {
        let pool = PgPoolOptions::new()
            .max_connections(5)
            .connect(&*config.database_url)
            .await?;

        let conn = SqlxPostgresConnector::from_sqlx_postgres_pool(pool);
        Ok(DasApi {
            db_connection: conn,
        })
    }
}

pub fn not_found(asset_id: &String) -> DbErr {
    DbErr::RecordNotFound(format!("Asset Proof for {} Not Found", asset_id))
}

#[async_trait]
impl ApiContract for DasApi {
    async fn check_health(self: &DasApi) -> Result<(), DasApiError> {
        &self.db_connection.execute(Statement::from_string(DbBackend::Postgres, "SELECT 1".to_string())).await?;
        Ok(())
    }

    async fn get_asset_proof(self: &DasApi, asset_id: String) -> Result<AssetProof, DasApiError> {
        let id = validate_pubkey(asset_id.clone())?;
        let id_bytes = id.to_bytes().to_vec();
        get_proof_for_asset(&self.db_connection, id_bytes)
            .await
            .and_then(|p| {
                if p.proof.len() == 0 {
                    return Err(not_found(&asset_id));
                }
                Ok(p)
            })
            .map_err(Into::into)
    }

    async fn get_asset(self: &DasApi, asset_id: String) -> Result<Asset, DasApiError> {
        let id = validate_pubkey(asset_id.clone())?;
        let id_bytes = id.to_bytes().to_vec();
        get_asset(&self.db_connection, id_bytes)
            .await
            .map_err(Into::into)
    }

    async fn get_assets_by_owner(
        self: &DasApi,
        owner_address: String,
        sort_by: AssetSorting,
        limit: u32,
        page: u32,
        before: String,
        after: String,
    ) -> Result<AssetList, DasApiError> {
        let owner_address = validate_pubkey(owner_address.clone())?;
        let owner_address_bytes = owner_address.to_bytes().to_vec();
        let before = validate_pubkey(before.clone())?;
        let before_bytes = before.to_bytes().to_vec();
        let after = validate_pubkey(after.clone())?;
        let after_bytes = after.to_bytes().to_vec();

        get_assets_by_owner(
            &self.db_connection,
            owner_address_bytes,
            sort_by,
            limit,
            page,
            before_bytes,
            after_bytes,
        )
        .await
        .map_err(Into::into)
    }

    async fn get_listed_assets_by_owner(
        &mut self,
        _owner_address: String,
        _sort_by: AssetSorting,
        _limit: u32,
        _page: u32,
        _before: String,
        _after: String,
    ) -> Result<ListingsList, DasApiError> {
        todo!()
    }

    async fn get_offers_by_owner(
        &mut self,
        _owner_address: String,
        _sort_by: OfferSorting,
        _limit: u32,
        _page: u32,
        _before: String,
        _after: String,
    ) -> Result<OfferList, DasApiError> {
        todo!()
    }

    async fn get_assets_by_group(
        &mut self,
        _group_expression: String,
        _sort_by: AssetSorting,
        _limit: u32,
        _page: u32,
        _before: String,
        _after: String,
    ) -> Result<AssetList, DasApiError> {
        todo!()
    }

    async fn get_assets_by_creator(
        &mut self,
        _creator_expression: String,
        _sort_by: AssetSorting,
        _limit: u32,
        _page: u32,
        _before: String,
        _after: String,
    ) -> Result<AssetList, DasApiError> {
        todo!()
    }

    async fn search_assets(
        &mut self,
        _search_expression: String,
        _sort_by: AssetSorting,
        _limit: u32,
        _page: u32,
        _before: String,
        _after: String,
    ) -> Result<AssetList, DasApiError> {
        todo!()
    }
}
