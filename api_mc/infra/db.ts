import mongoose from "mongoose";

class DataBase {
    private DB_URL = "mongo://localhost:27017/db_portal";

    createConnection() {
        mongoose.connect(this.DB_URL)
    }
}

export default DataBase;