var food = [
    {
        "sign": "&#127812;",
        "name": "mushroom"
   },
    {
        "sign": "&#127813;",
        "name": "tomato"
   },
    {
        "sign": "&#127814;",
        "name": "aubergine"
   },
    {
        "sign": "&#127815;",
        "name": "grapes"
   },
    {
        "sign": "&#127816;",
        "name": "melon"
   },
    {
        "sign": "&#127817;",
        "name": "watermelon"
   },
    {
        "sign": "&#127818;",
        "name": "tangerine"
   },
    {
        "sign": "&#127819;",
        "name": "lemon"
   },
    {
        "sign": "&#127820;",
        "name": "banana"
   },
    {
        "sign": "&#127821;",
        "name": "pineapple"
   },
    {
        "sign": "&#127822;",
        "name": "red apple"
   },
    {
        "sign": "&#127823;",
        "name": "green apple"
   },
    {
        "sign": "&#127824;",
        "name": "pear"
   },
    {
        "sign": "&#127825;",
        "name": "peach"
   },
    {
        "sign": "&#127826;",
        "name": "cherries"
   },
    {
        "sign": "&#127827;",
        "name": "strawberry"
   },
    {
        "sign": "&#127828;",
        "name": "hamburger"
   },
    {
        "sign": "&#127829;",
        "name": "slice of pizza"
   },
    {
        "sign": "&#127830;",
        "name": "meat on bone"
   },
    {
        "sign": "&#127831;",
        "name": "poultry leg"
   },
    {
        "sign": "&#127838;",
        "name": "bread"
   },
    {
        "sign": "&#127839;",
        "name": "french fries"
   },
    {
        "sign": "&#127848;",
        "name": "ice cream"
   },
    {
        "sign": "&#127849;",
        "name": "doughnut"
   },
    {
        "sign": "&#127850;",
        "name": "cookie"
   },
    {
        "sign": "&#127851;",
        "name": "chocolate bar"
   },
    {
        "sign": "&#127852;",
        "name": "candy"
   },
    {
        "sign": "&#127853;",
        "name": "lollipop"
   }
];

var banana = food.reduce(function (prev, curr) {
    if (curr.name === "banana") {
        return curr.sign;
    }
    return prev;
});
