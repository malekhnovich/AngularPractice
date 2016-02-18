/**
 * Created by maxrenet on 2/16/16.
 */
(function() {

    var app = angular.module("codeSchoolAngular", []);
    app.controller("codeSchoolAngularCtrl", function () {
        this.products = gems;
    });
    app.controller("PanelController", function () {
        this.tab = 1;

        this.selectTab = function (setTab) {
            this.tab = setTab;
        };
        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
        };
    });
    app.controller("ReviewController", function () {
        this.review = {};
        this.addReview = function (product) {
            product.review.push(this.review);
            this.review = {};
        };

    });

    var gems=[
        {
        name:'Dodecahedron',
        price:2.95,
        description:'a three-dimensional shape having twelve plane faces, in particular a regular solid figure with twelve equal pentagonal faces.',
        canPurchase:true,
        soldOut:true,
        rarity:3,
        color:'#CCC',
        faces:14,
            images:[{
                full:'images/diamond.jpg',
                thumb:'images/diamond.jpg'
            }],
        review:[
            {
                stars:5,
                body:"Greatest piece on Earth",
                author:"joe@thomas.com"
            },
            {
                stars:1,
                body:"This product isn't great",
                author:"tom@patriots.com"
            }
        ]
        },


        {
            name:"Pentagonal Gem",
            price:5.95,
            description:'gem in the shape of a pentagon studded with diamonds',
            canPurchase:true,
            soldOut:false,
            rarity:5,
            color:'#EEE',
            faces:12,
            images:[{
                full: 'images/saphire.jpg',
                thumb:'images/saphire.jpg'

            }]},
        {
            name:'Bloodstone',
            description:'Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.',
            canPurchase:true,
            soldOut:false,
            rarity:6,
            color:'#FFF',
            faces:12,
            images:[{
                full:'images/bloodstone.jpg',
                thumb:'images/bloodstone.jpg'
            }]}




    ];
})();