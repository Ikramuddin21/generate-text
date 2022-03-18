// dummy text
const dummyText = [
    "Pastry bonbon cake bear claw marshmallow tart gingerbread candy. Cookie brownie pudding cookie lemon drops gummies. Brownie shortbread biscuit lemon drops biscuit donut. Chocolate bar dragée halvah pudding candy canes halvah. Oat cake ice cream gingerbread pudding gummies caramels. Candy canes gummies sweet roll dragée dragée. Toffee jujubes chocolate topping candy gingerbread. Chupa chups tootsie roll candy canes macaroon bear claw bear claw croissant wafer. Bonbon powder marzipan gingerbread cake. Marzipan icing icing halvah candy carrot cake muffin.",

"Cupcake icing tiramisu candy dessert sugar plum. Halvah caramels bonbon oat cake sweet cake ice cream. Jelly beans candy dessert toffee candy caramels chupa chups cake sweet. Cheesecake gummi bears donut macaroon pudding lemon drops. Liquorice wafer sweet cotton candy croissant dragée sweet roll. Bonbon cake oat cake sweet roll sesame snaps. Muffin fruitcake ice cream toffee gingerbread fruitcake candy canes. Danish bear claw cupcake jelly-o cotton candy chocolate.",

"Chocolate bar chocolate bar chocolate bar fruitcake chocolate cake gummies. Tootsie roll dragée cake donut shortbread jelly beans. Brownie gingerbread pudding cupcake candy canes chocolate bar lollipop. Tiramisu candy canes cake jujubes biscuit. Carrot cake biscuit jelly-o chupa chups powder. Dessert sesame snaps tart fruitcake chupa chups fruitcake icing cake. Lemon drops oat cake macaroon bear claw tootsie roll pie cupcake. Sesame snaps macaroon cake halvah candy bear claw pastry.",

"Macaroon pastry dragée oat cake pastry cupcake chocolate bar sweet pastry. Bear claw dragée danish tart croissant chupa chups. Liquorice cheesecake pudding croissant donut bear claw jelly-o. Sugar plum marshmallow sesame snaps jelly beans dragée jelly biscuit. Jelly-o tiramisu croissant candy canes oat cake cookie lemon drops. Brownie chocolate donut dragée gummi bears.",

"Sweet roll gummi bears chupa chups jelly shortbread marshmallow cotton candy gummi bears dessert. Sesame snaps lemon drops ice cream cookie toffee chocolate bar icing. Danish donut chocolate cake dragée toffee carrot cake cheesecake cupcake. Oat cake jelly-o liquorice apple pie shortbread shortbread. Liquorice dessert chocolate bar pudding tart cake tootsie roll. Caramels cake sugar plum bonbon apple pie jelly beans lemon drops. Pudding lollipop bear claw shortbread dessert jelly. Gummi bears jelly-o dragée pudding gummi bears sugar plum liquorice marshmallow liquorice. Liquorice bonbon sesame snaps bonbon danish chocolate cake sweet. Fruitcake marzipan pastry wafer gingerbread chocolate bar chupa chups topping caramels.",

"Wafer sugar plum cookie bear claw marshmallow cupcake cheesecake caramels. Chocolate bar chocolate bar bear claw toffee donut carrot cake icing. Shortbread dragée halvah bonbon danish. Dessert lemon drops biscuit gummies jelly carrot cake tart bear claw chocolate cake. Biscuit toffee apple pie sweet tart carrot cake. Danish cheesecake tootsie roll chupa chups sesame snaps. Jelly-o sweet liquorice candy cheesecake topping candy tiramisu cake. Cake cookie halvah cotton candy sesame snaps. Pudding jelly beans tiramisu bonbon jelly lollipop. Pastry candy dessert jujubes topping gingerbread dragée danish.",
"Tootsie roll sweet roll biscuit toffee cupcake biscuit dessert bear claw. Bonbon chupa chups halvah pastry chocolate tart gingerbread lemon drops topping. Chocolate cake sugar plum liquorice bonbon toffee gingerbread caramels cupcake. Pudding sweet roll marzipan jelly-o tart toffee. Powder candy powder pudding chocolate cake powder croissant ice cream. Sweet roll danish ice cream chocolate dessert marzipan liquorice marshmallow bonbon. Croissant chupa chups pastry tiramisu bear claw.",

"Bear claw toffee gingerbread pudding caramels shortbread chocolate bar. Halvah chocolate cake caramels lollipop topping sweet roll ice cream candy. Sesame snaps dessert muffin soufflé powder gummi bears. Chocolate liquorice candy candy canes ice cream sweet pie. Croissant pudding powder liquorice marshmallow candy canes dessert donut. Liquorice fruitcake tiramisu sweet toffee chocolate jelly. Jelly dragée chupa chups pudding danish topping marshmallow chupa chups gummi bears. Cookie lemon drops icing chocolate dessert biscuit gummies donut. Shortbread tiramisu oat cake apple pie cotton candy. Powder chupa chups bear claw fruitcake biscuit marzipan cupcake pudding cupcake.",

"Soufflé tart lollipop marshmallow gummies tart donut cake. Apple pie dessert macaroon donut topping bear claw tootsie roll dessert. Halvah dragée cake chocolate croissant chocolate bar lollipop liquorice. Apple pie wafer bonbon croissant cupcake marshmallow. Chocolate bar marzipan soufflé lemon drops cupcake. Icing caramels dessert dessert liquorice. Jujubes jelly beans sugar plum oat cake powder fruitcake.",

"Tiramisu tootsie roll croissant biscuit bonbon cake bonbon. Brownie caramels oat cake biscuit tart croissant croissant dragée. Chocolate cake lemon drops biscuit brownie cupcake chupa chups topping. Candy canes toffee candy sesame snaps marzipan. Lollipop liquorice candy pie oat cake. Cake lollipop wafer macaroon carrot cake ice cream cake tiramisu carrot cake. Dessert tiramisu apple pie lemon drops apple pie biscuit chocolate. Ice cream bear claw muffin gummi bears chocolate bonbon pudding caramels. Cheesecake sweet roll caramels dragée donut brownie muffin cookie.."
];

// selector
const form = document.querySelector("form");
const inputField = document.getElementById("pNumber");
const result = document.querySelector(".result");

// event listener
form.addEventListener("submit", generateDummyText);

// generate dummy text
function generateDummyText (e) {
    e.preventDefault();

    const inputValue = inputField.value;

    // input empty
    inputField.value = "";

    if(isNaN(inputValue) || inputValue <= 0 || inputValue > 10 ) {
        const randomNumber = Math.floor(Math.random() * dummyText.length);

        const generateText = dummyText[randomNumber];
        result.innerHTML = `<p>${generateText}</p>`
    }
    else {
        const generateText = dummyText.slice(0, inputValue);

        const finalArray = generateText.map(singleText => `<p>${singleText}</p>`).join("");
        result.innerHTML = finalArray;
    }
}