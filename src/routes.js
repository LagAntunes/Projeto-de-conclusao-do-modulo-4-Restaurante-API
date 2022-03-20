import { insertIngrediente, updateIngrediente, selectIngrediente, selectUnicoIngrediente, deleteIngrediente} from './controler/tabelasIngredientes.js';

class Router {
    static ingredientes(app, router) {
        app.get(router, async (req, res) => {
            await selectIngrediente(req, res);
        });
        app.get(router + '/:id', (req, res) => {
            selectUnicoIngrediente(req, res);
        });
        app.post(router, (req, res) => {
            insertIngrediente(req, res);
        });
        app.put(router + '/:id', (req, res) => {
            updateIngrediente(req, res);
        });
        app.delete(router + '/:id', (req, res) => {
            deleteIngrediente(req, res);
        });
    }
}

export default Router;