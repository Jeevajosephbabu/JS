const email = {
  "id": 1,
  "first_name": "Fletcher",
  "Subject": "next generation",
  "url": "https://robohash.org/magnioditdolor.png?size=50x50&set=set1",
  "body": "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
  "main_body": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio."
}
  
  
  
  
  
  
 const img = document.querySelector('img');
//console.log(img)
img.src = email.url;

const name = document.querySelector('.email-name');
name.textContent = email.first_name;

const subject = document.querySelector('.email-subject');
subject.textContent=email.Subject;

const para = document.getElementById("emailparagraph1");
para.textContent= email.body;

 email = document.querySelector('.email-item');
email.addEventListner("click",function(error)
{
   const mainsub = document.querySelector("email-content-title");
 mainsub.textContent=`${email.Subject}`;
  

                      }
);

const compose = document.quuertSelector(".primary-button")
email.addEventListner("click",function()
                     {
  console.log(hi);
  <div class="modal fade" id="compose-modal" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <h4 class="modal-title">Compose</h4>
      </div>
      <form onsubmit="return sendEmail();">
        <div class="modal-body">
          <div class="form-group">
            <input type="email" class="form-control" id="compose-to" placeholder="To" required />
          </div>

          <div class="form-group">
            <input type="text" class="form-control" id="compose-subject" placeholder="Subject" required />
          </div>

          <div class="form-group">
            <textarea class="form-control" id="compose-message" placeholder="Message" rows="10" required></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          <button type="submit" id="send-button" class="btn btn-primary">Send</button>
        </div>
      </form>
    </div>
  </div>
</div>
})








dealBtn.addEventListener('click', () => {
                    let restEndpoint = `https://my.api.mockaroo.com/assignment.json?key=7f2391b0`;
                    fetch(restEndpoint)
                       .then(res => res.json())
                       .then(data => {
                          console.log(data);
                      hand.push(data);
                      render(hand);
                    
                       });
                 });                  
               });

function render(view) {
  const main = document.querySelector('main');
  const displayHand = view.map((email, index) => `
<div data-index=${index} class="email ${email.selected ? ' ' : ''}">
      <div class="rmail-content">
        <p class="title">
          <img src="${card.email[0].image}" alt="">
        </p>
      </div>
    </div> `).join('');
  
  main.innerHTML = displayHand;
  
 const cardflop = [...document.querySelectorAll('.email')];
  
  cardflop.map(card => {
    card.addEventListener('click', function() {
      view[this.dataset.index].selected = true;
      render(view);
    })
  })
}

const keptBtn = document.querySelector('#kept');
keptBtn.addEventListener('click', () => {
  render(hand.filter(card => card.selected));
});

const trashBtn = document.querySelector('#trash');
trashBtn.addEventListener('click', () => {
  render(hand.filter(card => !card.selected));
});

// call initialize() 
initialize();











const article = {
 id	:1
first_name	:"Carce"
Subject	:""
url:	"https://robohash.org/mollitianihilrepudiandae.bmp?size=50x50&set=set1"
body	""
main_body:	"Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh."
};


const tweetBtn = document.querySelector('#tweet');
tweetBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  
  const news = document.querySelector('#news');
  news.innerHTML = `<form class="pa4 black-80">
  <div>
    <label for="comment" class="f6 b db mb2">Share a link with your followers</label>
    <textarea id="comment" rows="3" name="comment" class="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc">Tweet: ${article.title}</textarea>
  </div>
  <button id="share" class="f6 link dim br1 ph3 pv2 mb2 dib white bg-dark-blue">Share</button>
</form>
`;
   const share = document.querySelector('#share');
  share.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(`tweeting article by ${article.author}`);
    news.innerHTML = '<h1> your tweet has been posted</h1>';
  })
});