function route(expressApp){

    expressApp.get('/itemList', 'itemList', expressApp.restrict, function (req, res) {
        expressApp.models.ItemList.findAll().then(function(results) {
            res.render('itemList/list', {
                title: 'ItemList',
                listObjs: results
            });
        }).catch(function(err) {
            console.dir(err);
            next(err);
        });
    });

    expressApp.get('/itemList/create', 'itemList.create', expressApp.restrict, function (req, res) {
        res.render('itemList/create', {
            title: 'ItemLists Create'
        });
    });

    expressApp.get('/itemList/:id', 'itemList.show', expressApp.restrict, function(req, res) {
        var itemListId = req.params.id;
        expressApp.models.ItemList.findOne({
            where: {
                ItemListID: itemListId
            }
        })
        .then(function(result){
            res.render('itemList/edit', {
                title: 'ItemList',
                obj : result
            });
        }).catch(function(err) {
            next(err);
        });

    });

    expressApp.post('/itemList/', 'itemList.store', expressApp.restrict, function(req, res, next) {
        var itemList = req.body.itemList;
        expressApp.models.ItemList.create({
            ItemListID  : itemList.ItemListID
            , ItemName: itemList.ItemName
            , ItemDescription : itemList.ItemDescription
            , ItemPrice : itemList.ItemPrice
            , ItemSellPrice : itemList.ItemSellPrice
            , ItemCategory1 : itemList.ItemCategory1
            , ItemCategory2 : itemList.ItemCategory2
            , ItemCategory3 : itemList.ItemCategory3

            , sCol1 : itemList.sCol1 || ''
            , sCol2 : itemList.sCol2 || ''
            , sCol3 : itemList.sCol3 || ''
            , sCol4 : itemList.sCol4 || ''
            , sCol5 : itemList.sCol5 || ''
            , sCol6 : itemList.sCol6 || ''
            , sCol7 : itemList.sCol7 || ''
            , sCol8 : itemList.sCol8 || ''
            , sCol9 : itemList.sCol9 || ''
            , sCol10 : itemList.sCol10 || ''

            , ItemCreateAdminID    : itemList.ItemCreateAdminID || ''
            , ItemUpdateAdminID    : itemList.ItemUpdateAdminID || ''
            , HideYN : itemList.HideYN
            , DeleteYN : itemList.DeleteYN
            , DataFromRegion : itemList.DataFromRegion || ''
            , DataFromRegionDT : itemList.DataFromRegionDT || '1900-01-01 00:00:00:000 +00:00'

        }).then(function() {
            res.redirect('/itemList');
        }).catch(function(err) {
            next(err);
        });

    });

    expressApp.post('/itemList/edit', 'itemList.update', expressApp.restrict, function(req, res) {
        res.redirect('/itemList');
    });
}

module.exports = route;
