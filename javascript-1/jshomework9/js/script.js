
const mailStorage = [
    {

        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    },
    {

        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    },
    {

        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    },
    {
        text:"lorem"
    },
    {
        text:"klejhkjergjregjh"
    }
];


const mailContainer = document.createElement('div');
mailContainer.classList.add('mail-container');

function showText(target) {
    const allChildElems = [...target.children];
    const textToShow = allChildElems.find(item => {
        return item.classList.contains('mail-item-text');
    });
    const allTextOnPage = mailContainer.querySelectorAll
    ('.mail-item-text');

    allTextOnPage.forEach(text => {
        if(text === textToShow) {
            textToShow.hidden = !textToShow.hidden;
        } else {
            text.hidden = true
        }
    })
}

document.querySelector('.first').addEventListener('click', (event) => {
    if (event.target.classList.contains('mail-item')) {
        showText(event.target);
    }
     else {
        showText(event.target.parentElement);
    }
});

document.querySelector('script').before(mailContainer);

mailStorage.forEach((mailItem) => {
    const letterContanier = document.createElement("div");
    letterContanier.style.backgroundColor="red";
    const letterText = document.createElement("p");

    letterContanier.classList.add('mail-item');

    letterText.classList.add('mail-item-text');


    letterText.innerText = mailItem.text;
    letterText.hidden = true;



    letterContanier.append(  letterText);
    mailContainer.append(letterContanier);
});
