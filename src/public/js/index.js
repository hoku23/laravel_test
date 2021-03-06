// 変更入力ボタンに対してクリックイベントを適用
const changeButtons = document.getElementsByClassName('userChange-btn');
for(let i = 0; i < changeButtons.length; i++) {
    changeButtons[i].addEventListener('click', showChangeForm, false);
}

// 変更入力ボタンをクリックすると実行する関数
function showChangeForm(){
    // コンテンツのclassの値を変更
    document.getElementsByClassName('show-changeForm')[0].classList.remove('show-changeForm');
    const arrayChanges = Array.prototype.slice.call(changeButtons);
    const index = arrayChanges.indexOf(this);
    document.getElementsByClassName('change-form')[index].classList.add('show-changeForm');
};

let user_info_changes_btns = document.getElementsByClassName('user_info_changes_btn');
for (let i = 0; i < user_info_changes_btns.length; i++) {
    if (user_info_changes_btns[i]) {
        user_info_changes_btns[i].addEventListener('click', function(e){
            console.log(e.target.parentNode.previousElementSibling.lastElementChild.lastElementChild);
            let user_info_changes = e.target.parentNode.previousElementSibling.lastElementChild.lastElementChild;
            user_info_changes.click();
        })
    }    
}

let selection_icon = document.getElementById('selection-icon');
if (selection_icon) {
    selection_icon.addEventListener('click', function(){
        console.log('click');
        let iconFile_select = document.getElementById('iconFile_select');
        iconFile_select.click();
    })
}

let iconFile_select = document.getElementById('iconFile_select');
if (iconFile_select) {
    iconFile_select.addEventListener('change', function(e) {
        const file = e.target.files;
        const reader = new FileReader();
        reader.readAsDataURL(file[0]);
        reader.onload = () => {
            const image = document.getElementById('img');
            image.src = reader.result;
        };    
    })
}

let userIcon_change_btn = document.getElementById('userIcon_change_btn');
let userIcon_change = document.getElementById('userIcon_change');
if (userIcon_change_btn) {
    userIcon_change_btn.addEventListener("click", function(e) {
        var datetime = Date.now();
        var file_name =  user_name + "." + datetime + "." + "jpg";

    
        let fileName = document.getElementById('fileName');
        fileName.value = file_name;
        console.log(fileName.value);
        
        let imgTag = "storage/user_icons/" + file_name;

        console.log(imgTag);
        let iconPath = document.getElementById('iconPath');
        iconPath.value = imgTag;
        console.log(iconPath.value);
        userIcon_change.click();
    })    
}


// お気に入りタグに対してクリックイベントを適用
const favoriteTags = document.getElementsByClassName('fav-tag');
for(let i = 0; i < favoriteTags.length; i++) {
    if(favoriteTags[i]) {
        favoriteTags[i].addEventListener('click', switchFavoriteTags, false);   
    }
}

// お気に入りタグをクリックすると実行する関数
function switchFavoriteTags(){

    // classの切り替え
    // .fav-onがついていれば外す
    // .fav-onがついていなければつける
    const arrayFavoriteTags = Array.prototype.slice.call(favoriteTags);
    const index = arrayFavoriteTags.indexOf(this);
    const targetTag = document.getElementsByClassName('fav-tag')[index];
    const tagclasses = Array.from(targetTag.classList);
    if (tagclasses.includes('tag-on') == true) {
        targetTag.classList.remove('tag-on');
    } else {
        targetTag.classList.add('tag-on');
    }
};


let questionReceive_yes_btn = document.getElementById('questionReceive-yes-btn');
let questionReceive_no_btn = document.getElementById('questionReceive-no-btn');
let no_check = document.getElementById('no_check');
let yes_check = document.getElementById('yes_check');

if (questionReceive_yes_btn) {
    questionReceive_yes_btn.onclick = function(){
        console.log('click');
        let questionReceive_yes = document.getElementById('questionReceive_yes');
        if (yes_check.classList.contains('checked') == false) {
            yes_check.classList.add('checked');
        } 
        if (no_check.classList.contains('checked') == true) {
            no_check.classList.remove('checked');
        } 
        questionReceive_yes.click();
    }
}
if (questionReceive_no_btn) {
    questionReceive_no_btn.onclick = function(){
        console.log('click');
        if (no_check.classList.contains('checked') == false) {
            no_check.classList.add('checked');
        } 
        if (yes_check.classList.contains('checked') == true) {
            yes_check.classList.remove('checked');
        } 
        let questionReceive_no = document.getElementById('questionReceive_no');
        questionReceive_no.click();
    }
}
let questionReceive_submit_btn = document.getElementById('questionReceive_submit_btn');
if (questionReceive_submit_btn) {
    questionReceive_submit_btn.addEventListener('click', function(){
        var radioList = document.getElementsByName("questionReceive");
        var str = "選択されていません";
        for(var i=0; i<radioList.length; i++){
            if (radioList[i].checked) {
                str = radioList[i].value + "が選択されています";
                break;
            }
        }
        console.log(str);
        let questionReceive_submit = document.getElementById('questionReceive_submit');
        questionReceive_submit.click();
    }) 
}

// 通知設定のタグに対してクリックイベントを適用
const noteChangeTags = document.getElementsByClassName('noteChange-postTag');
for(let i = 0; i < noteChangeTags.length; i++) {
    noteChangeTags[i].addEventListener('click', switchNoteTags, false);
}

// 通知設定のタグをクリックすると実行する関数
function switchNoteTags(){

    // classの切り替え
    // .fav-onがついていれば外す
    // .fav-onがついていなければつける
    const arrayNoteTags = Array.prototype.slice.call(noteChangeTags);
    const index = arrayNoteTags.indexOf(this);
    const targetTag = document.getElementsByClassName('noteChange-postTag')[index];
    const tagclasses = Array.from(targetTag.classList);
    if (tagclasses.includes('notePost-on') == true) {
        targetTag.classList.remove('notePost-on');
    } else {
        targetTag.classList.add('notePost-on');
    }
};

const noteQuestionChangeTags = document.getElementsByClassName('noteChange-questionTag');
for(let i = 0; i < noteQuestionChangeTags.length; i++) {
    noteQuestionChangeTags[i].addEventListener('click', switchNoteQuestionTags, false);
}

// 通知設定のタグをクリックすると実行する関数
function switchNoteQuestionTags(){

    // classの切り替え
    // .fav-onがついていれば外す
    // .fav-onがついていなければつける
    const arrayNoteTags = Array.prototype.slice.call(noteQuestionChangeTags);
    const index = arrayNoteTags.indexOf(this);
    const targetTag = document.getElementsByClassName('noteChange-questionTag')[index];
    const tagclasses = Array.from(targetTag.classList);
    if (tagclasses.includes('noteQuestion-on') == true) {
        targetTag.classList.remove('noteQuestion-on');
    } else {
        targetTag.classList.add('noteQuestion-on');
    }
};

// 通知設定の変更入力ボタンに対してクリックイベントを適用
const noteChangeButtons = document.getElementsByClassName('noteChange-btn');
for(let i = 0; i < noteChangeButtons.length; i++) {
    if (noteChangeButtons[i]) {
        noteChangeButtons[i].addEventListener('click', showChangeNote, false);   
    }
}

// 通知設定の変更入力ボタンをクリックすると実行する関数
function showChangeNote(){

    // コンテンツのclassの値を変更
    document.getElementsByClassName('show-noteChange')[0].classList.remove('show-noteChange');
    const arrayChanges = Array.prototype.slice.call(noteChangeButtons);
    const index = arrayChanges.indexOf(this);
    document.getElementsByClassName('notification-change')[index].classList.add('show-noteChange');
};

// 通知設定のタグに対してクリックイベントを適用
const searchTags = document.getElementsByClassName('search-tag');
for(let i = 0; i < searchTags.length; i++) {
    searchTags[i].addEventListener('click', switchsearchTags, false);
}

// 通知設定のタグをクリックすると実行する関数
    function switchsearchTags(){

    // classの切り替え
    // .fav-onがついていれば外す
    // .fav-onがついていなければつける
    const arrayNoteTags = Array.prototype.slice.call(searchTags);
    const index = arrayNoteTags.indexOf(this);
    const targetTag = document.getElementsByClassName('search-tag')[index];
    const tagclasses = Array.from(targetTag.classList);
    if (tagclasses.includes('search-on') == true) {
        targetTag.classList.remove('search-on');
    } else {
        targetTag.classList.add('search-on');
    }
};


// tag
const navMask = document.getElementById('nav-mask');
const menu = document.getElementById('menu');
const hamburger = document.getElementById('hamburger');

// menuボタンに対するクリックイベント
if (menu) {
    menu.addEventListener('click', openMenu, false);    
}


// menuボタンがクリックされた時の処理
function openMenu(){
    if (navMask.classList.contains('show-nav') == true) {
        navMask.classList.remove('show-nav');
    } else {
        navMask.classList.add('show-nav');
    }

    if (hamburger.classList.contains('open') == true) {
        hamburger.classList.remove('open');
    } else {
        hamburger.classList.add('open');
    }
}


function newTextCreate() {
    area2.value = area.value;
	if (area2.value) {
	    //入力内容を改行ごとに分けて配列に格納
        let formText = area2.value.split('\n');
        //画像パスを拾う
        let aryCheck = formText.filter(value => value.includes('storage/content_imgs/'));
        
        aryCheck.forEach(function(element) {
            //パス部分とテキスト部分を分ける
            let cutElem = element.substr(0, element.indexOf('.jpg') + 4);
            let cutText = element.substr(element.indexOf('.jpg') + 4);
            //パス部分にimgタグを付与して配列に格納し直す
            // let imgTag = "<img src=\"" + cutElem + "\">"
            // let imgTag = "<div class=\"PostContent-imgs\"><img style=\"max-width: 90%\" src=\"https://b0b0704b8c11464390acf6e91a447ae8.vfs.cloud9.us-west-2.amazonaws.com/" + cutElem + "\"></div>"
            console.log(cutElem);
            // cutElem = '../storage/content_imgs/Hokuto.1649828956409.jpg'; // 
            let imgTag = "<div class=\"PostContent-imgs\"><img style=\"max-width: 90%\" src=\"" + cutElem + "\"></div>"
            formText[formText.indexOf(element)] = imgTag;
            //テキスト部分を配列に格納
            formText.splice(formText.indexOf(imgTag) + 1, 0, cutText);
        });
        //入力内容の配列の要素を<br>で繋ぐ
        let newFormText = formText.join('<br>');
        
        area2.value = newFormText;
    }    
}

//textarea取得
var area = document.getElementById('content');
var area2 = document.getElementById('content_htmlTag');
//プレビューボタン取得
const check = document.getElementById('postContent_preview-btn');
//プレビューボタンのクリックイベント
if (check) {
    check.addEventListener('click', function() {
    //textareaの入力内容にimgタグ付与
    newTextCreate();
    //phpにpost
	let preview = document.getElementById('postContent_preview');
	preview.click();
})    
}


//保存ボタン取得
const save_btn = document.getElementById('save-btn');
//保存ボタンのクリックイベント
if (save_btn) {
    save_btn.addEventListener('click', function() {
    //textareaの入力内容にimgタグ付与
    newTextCreate();
    //phpにpost
	let save = document.getElementById('postContent_save');
	save.click();
})
    
}

const fileSelect = document.getElementById("fileSelect"),
      fileElem = document.getElementById("fileElem");
if (fileSelect) {
    fileSelect.addEventListener("click", function () {
      if (fileElem) {
        fileElem.click();
      }
    }, false);
}
    

function addText3()
{

    var datetime = Date.now();
    var file_name =  user_name + "." + datetime + "." + "jpg";

    let fileName = document.getElementById('fileName');
    fileName.value = file_name;

	var text ="\n" + "storage/content_imgs/" + file_name + "\n";
	
	//カーソルの位置を基準に前後を分割して、その間に文字列を挿入
	area.value = area.value.substr(0, area.selectionStart)
			+ text
			+ area.value.substr(area.selectionStart);
			
	newTextCreate();
	
	let preview = document.getElementById('postContent_preview');
	preview.click();
	
}

// 新規投稿作成のタイトル保存
let postTitle_store_btn = document.getElementById('postTitle-store-btn');
let postTitle_store = document.getElementById('postTitle-store');
if (postTitle_store_btn) {
    postTitle_store_btn.addEventListener("click", function(e) {
        postTitle_store.click();
    })    
}
// 新規投稿作成のサムネイル保存
let postThumnail_store_btn = document.getElementById('postThumnail-store-btn');
let postThumnail_store = document.getElementById('postThumnail-store');
if (postThumnail_store_btn) {
    postThumnail_store_btn.addEventListener("click", function(e) {
        var datetime = Date.now();
        var file_name =  user_name + "." + datetime + "." + "jpg";
    
        let fileName = document.getElementById('fileName');
        fileName.value = file_name;
        console.log(fileName.value);
        
        // let imgTag = "https://b0b0704b8c11464390acf6e91a447ae8.vfs.cloud9.us-west-2.amazonaws.com/storage/thumnail_imgs/" + file_name;
        let imgTag = "storage/thumnail_imgs/" + file_name;

        console.log(imgTag);
        let thumnailPath = document.getElementById('thumnailPath');
        thumnailPath.value = imgTag;
        console.log(thumnailPath.value);
        let postTitle_textarea = document.getElementById('postTitle_textarea');
        let postTitle = document.getElementById('postTitle');
        console.log(postTitle.value);
        console.log(postTitle_textarea);
        postTitle_textarea.value = postTitle.value;
        console.log(postTitle_textarea);
        postThumnail_store.click();
    })    
}
// 新規投稿作成のサムネイルプレビュー
let thumnailFileSelect_btn = document.getElementById('thumnailFileSelect-btn');
let thumnailFileSelect = document.getElementById('thumnailFileSelect');
if (thumnailFileSelect_btn) {
    thumnailFileSelect_btn.addEventListener("click", function(e) {
        thumnailFileSelect.click();
    })

    thumnailFileSelect.addEventListener("change", function(e) {
        
        const file = e.target.files;
        const reader = new FileReader();
        reader.readAsDataURL(file[0]);
        reader.onload = () => {
            const image = document.getElementById('img');
            image.src = reader.result;
        };    
    	
    })
}

// 投稿タグに対してクリックイベントを適用
const postTags = document.getElementsByClassName('post-tag');
for(let i = 0; i < postTags.length; i++) {
    postTags[i].addEventListener('click', switchPostTags, false);
}

// 投稿タグをクリックすると実行する関数
function switchPostTags(){

    // classの切り替え
    // .tag-onがついていれば外す
    // .tag-onがついていなければつける
    const arrayPostTags = Array.prototype.slice.call(postTags);
    const index = arrayPostTags.indexOf(this);
    const targetTag = document.getElementsByClassName('post-tag')[index];
    const tagclasses = Array.from(targetTag.classList);
    if (tagclasses.includes('tag-on') == true) {
        targetTag.classList.remove('tag-on');
    } else {
        targetTag.classList.add('tag-on');
    }
};

let user_page_link = document.getElementsByClassName('user_page_link');
for (let i = 0; i < user_page_link.length; i++) {
    if (user_page_link[i]) {
        user_page_link[i].addEventListener('click', function(e){
            let otherUser_name = user_page_link[i].firstElementChild.lastElementChild.innerHTML;
            console.log(otherUser_name);
            let otherUser = document.getElementById('otherUser');
            otherUser.value = otherUser_name;
            console.log(otherUser.value);
            let otherUser_btn = document.getElementById('otherUser_btn');
            otherUser_btn.click();
        })    
    }
}

let to_user_page = document.getElementsByClassName('to_user_page');
for (let i = 0; i < to_user_page.length; i++) {
    if (to_user_page[i]) {
        to_user_page[i].addEventListener('click', function(e){
            console.log(to_user_page[i].firstElementChild.lastElementChild.children[1]);
            let otherUser_name = to_user_page[i].firstElementChild.lastElementChild.children[1].value;
            console.log(otherUser_name);
            let otherUser = document.getElementById('otherUser');
            otherUser.value = otherUser_name;
            console.log(otherUser.value);
            let otherUser_btn = document.getElementById('otherUser_btn');
            otherUser_btn.click();
        })    
    }
}

let to_user_page_from_follow = document.getElementsByClassName('to_user_page_from_follow');
for (let i = 0; i < to_user_page_from_follow.length; i++) {
    if (to_user_page_from_follow[i]) {
        to_user_page_from_follow[i].addEventListener('click', function(e){
            console.log(to_user_page_from_follow[i].firstElementChild.lastElementChild.children[1]);
            let otherUser_name = to_user_page_from_follow[i].firstElementChild.lastElementChild.children[1].value;
            console.log(otherUser_name);
            let otherUser = document.getElementById('otherUser');
            otherUser.value = otherUser_name;
            console.log(otherUser.value);
            let otherUser_btn = document.getElementById('otherUser_btn');
            otherUser_btn.click();
        })    
    }
}

let follow_btn = document.getElementById('follow-btn');
if (follow_btn) {
    follow_btn.addEventListener('click', function() {
        let follow_user_id = document.getElementById('follow_user_id');
        console.log(follow_user_id);
        console.log(follow_user_id.value);
        let follow_user = document.getElementById('follow_user');
        follow_user.click();
    })
}

let follow_btns = document.getElementsByClassName('follow-btn');
for (let i = 0; i < follow_btns.length; i++) {
    if (follow_btns[i]) {
        follow_btns[i].addEventListener('click', function(e) {
            console.log(e.target.previousElementSibling.lastElementChild.lastElementChild.lastElementChild);
            let submit = e.target.previousElementSibling.lastElementChild.lastElementChild.lastElementChild;
            submit.click();
        })
    }
}

let follow_cancels = document.getElementsByClassName('follow-cancel');
for (let i = 0; i < follow_cancels.length; i++) {
    if (follow_cancels[i]) {
        follow_cancels[i].addEventListener('click', function(e) {
            console.log(e.target.previousElementSibling.lastElementChild.lastElementChild);
            console.log(e.target.previousElementSibling.lastElementChild.lastElementChild.previousElementSibling)
            let submit = e.target.previousElementSibling.lastElementChild.lastElementChild.lastElementChild;
            submit.click();
        })
    }
}

//通知設定
let userSelection_btn = document.getElementsByClassName('userSelection-btn');
for (let i = 0; i < userSelection_btn.length; i++) {
    if (userSelection_btn[i]) {
        userSelection_btn[i].addEventListener('click', function(e){
            console.log(e.target.previousElementSibling.lastElementChild);
            let submit = e.target.previousElementSibling.lastElementChild;
            submit.click();
        })
    }
}

//コメント
let reply = document.getElementsByClassName('reply');
for (let i = 0; i < reply.length; i++) {
    if (reply[i]) {
        reply[i].addEventListener('click', function(e){
            let target_form = e.target.parentNode.nextElementSibling;
            if (target_form.classList.contains('show_form')) {
                target_form.classList.remove('show_form');
                target_form.classList.add('hidden_form');
                e.target.textContent = '返信する';
            } else {
                target_form.classList.add('show_form');
                target_form.classList.remove('hidden_form');
                e.target.textContent = '入力欄を閉じる';
            }
        })
    }
}

let show_reply_btns = document.getElementsByClassName('show_reply_btn');
for (let i = 0; i < show_reply_btns.length; i++) {
    if (show_reply_btns[i]) {
        show_reply_btns[i].addEventListener('click', function(e){
            let target_comment = e.target.parentNode.nextElementSibling;
            if (target_comment.classList.contains('show-reply-comment')) {
                target_comment.classList.remove('show-reply-comment');
                target_comment.classList.add('hidden-reply-comment');
                e.target.textContent = '返信を表示';
            } else {
                target_comment.classList.add('show-reply-comment');
                target_comment.classList.remove('hidden-reply-comment');
                e.target.textContent = '返信を閉じる';
            }
        })
    }
}

function newTextCreate2() {
    question_area2.value = question_area.value;
	if (question_area2.value) {
	    //入力内容を改行ごとに分けて配列に格納
        let formText = question_area2.value.split('\n');
        //画像パスを拾う
        let aryCheck = formText.filter(value => value.includes('storage/question_imgs/'));
        
        aryCheck.forEach(function(element) {
            //パス部分とテキスト部分を分ける
            let cutElem = element.substr(0, element.indexOf('.jpg') + 4);
            let cutText = element.substr(element.indexOf('.jpg') + 4);
            //パス部分にimgタグを付与して配列に格納し直す
            // let imgTag = "<img src=\"" + cutElem + "\">"
            // let imgTag = "<div class=\"PostContent-imgs\"><img style=\"max-width: 90%\" src=\"https://b0b0704b8c11464390acf6e91a447ae8.vfs.cloud9.us-west-2.amazonaws.com/" + cutElem + "\"></div>"
            console.log(cutElem);
            // cutElem = '../storage/content_imgs/Hokuto.1649828956409.jpg'; // 
            let imgTag = "<div class=\"PostContent-imgs\"><img style=\"max-width: 90%\" src=\"" + cutElem + "\"></div>"
            formText[formText.indexOf(element)] = imgTag;
            //テキスト部分を配列に格納
            formText.splice(formText.indexOf(imgTag) + 1, 0, cutText);
        });
        //入力内容の配列の要素を<br>で繋ぐ
        let newFormText = formText.join('<br>');
        
        console.log(newFormText);
        
        question_area2.value = newFormText;
    }    
}

//textarea取得
var question_area = document.getElementById('questionCreate-content');
var question_area2 = document.getElementById('question_content_htmlTag');
//プレビューボタン取得
const question_check = document.getElementById('questionContent_preview-btn');
//プレビューボタンのクリックイベント
if (question_check) {
    question_check.addEventListener('click', function() {
    //textareaの入力内容にimgタグ付与
    newTextCreate2();
    newTextCreate3();
    //phpにpost
	let preview = document.getElementById('questionContent_preview');
	preview.click();
})    
}


//保存ボタン取得
const question_save_btn = document.getElementById('save-btn');
//保存ボタンのクリックイベント
if (question_save_btn) {
    question_save_btn.addEventListener('click', function() {
    //textareaの入力内容にimgタグ付与
    newTextCreate2();
    newTextCreate3();
    //phpにpost
	let save = document.getElementById('questionContent_save');
	save.click();
})
    
}

const question_fileSelect = document.getElementById("question_fileSelect"),
      question_fileElem = document.getElementById("question_fileElem");
if (question_fileSelect) {
    question_fileSelect.addEventListener("click", function () {
      if (question_fileElem) {
        question_fileElem.click();
      }
    }, false);
}



function addText4()
{

    var datetime = Date.now();
    var file_name =  user_name + "." + datetime + "." + "jpg";

    let fileName = document.getElementById('question_fileName');
    console.log(fileName);
    fileName.value = file_name;

	var text ="\n" + "storage/question_imgs/" + file_name + "\n";
	
	//カーソルの位置を基準に前後を分割して、その間に文字列を挿入
	question_area.value = question_area.value.substr(0, question_area.selectionStart)
			+ text
			+ question_area.value.substr(question_area.selectionStart);
			
	newTextCreate2();
	
	let preview = document.getElementById('questionContent_preview');
	preview.click();
	
}

//textarea取得
var try_area = document.getElementById('questionCreate-try');
var try_area2 = document.getElementById('try_htmlTag');

const try_fileSelect = document.getElementById("try_fileSelect"),
      try_fileElem = document.getElementById("try_fileElem");
if (try_fileSelect) {
    try_fileSelect.addEventListener("click", function () {
      if (try_fileElem) {
        try_fileElem.click();
      }
    }, false);
}

function addText5()
{

    var datetime = Date.now();
    var file_name =  user_name + "." + datetime + "." + "jpg";

    let fileName = document.getElementById('question_fileName');
    console.log(fileName);
    fileName.value = file_name;

	var text ="\n" + "storage/question_imgs/" + file_name + "\n";
	
	//カーソルの位置を基準に前後を分割して、その間に文字列を挿入
	try_area.value = try_area.value.substr(0, try_area.selectionStart)
			+ text
			+ try_area.value.substr(try_area.selectionStart);
			
	newTextCreate3();
	
	let preview = document.getElementById('questionContent_preview');
	preview.click();
	
}

function newTextCreate3() {
    try_area2.value = try_area.value;
	if (try_area2.value) {
	    //入力内容を改行ごとに分けて配列に格納
        let formText = try_area2.value.split('\n');
        //画像パスを拾う
        let aryCheck = formText.filter(value => value.includes('storage/question_imgs/'));
        
        aryCheck.forEach(function(element) {
            //パス部分とテキスト部分を分ける
            let cutElem = element.substr(0, element.indexOf('.jpg') + 4);
            let cutText = element.substr(element.indexOf('.jpg') + 4);
            //パス部分にimgタグを付与して配列に格納し直す
            // let imgTag = "<img src=\"" + cutElem + "\">"
            // let imgTag = "<div class=\"PostContent-imgs\"><img style=\"max-width: 90%\" src=\"https://b0b0704b8c11464390acf6e91a447ae8.vfs.cloud9.us-west-2.amazonaws.com/" + cutElem + "\"></div>"
            console.log(cutElem);
            // cutElem = '../storage/content_imgs/Hokuto.1649828956409.jpg'; // 
            let imgTag = "<div class=\"PostContent-imgs\"><img style=\"max-width: 90%\" src=\"" + cutElem + "\"></div>"
            formText[formText.indexOf(element)] = imgTag;
            //テキスト部分を配列に格納
            formText.splice(formText.indexOf(imgTag) + 1, 0, cutText);
        });
        //入力内容の配列の要素を<br>で繋ぐ
        let newFormText = formText.join('<br>');
        
        console.log(newFormText);
        
        try_area2.value = newFormText;
    }    
}

// 投稿タグに対してクリックイベントを適用
const questionTags = document.getElementsByClassName('question-tag');
for(let i = 0; i < questionTags.length; i++) {
    questionTags[i].addEventListener('click', switchQuestionTags, false);
}

// 投稿タグをクリックすると実行する関数
function switchQuestionTags(){

    // classの切り替え
    // .tag-onがついていれば外す
    // .tag-onがついていなければつける
    const arrayQuestionTags = Array.prototype.slice.call(questionTags);
    const index = arrayQuestionTags.indexOf(this);
    const targetTag = document.getElementsByClassName('question-tag')[index];
    const tagclasses = Array.from(targetTag.classList);
    if (tagclasses.includes('tag-on') == true) {
        targetTag.classList.remove('tag-on');
    } else {
        targetTag.classList.add('tag-on');
    }
};

let questionCreateUsers_select = document.getElementsByClassName('questionCreateUsers-select');
for (let i = 0; i < questionCreateUsers_select.length; i++) {
    if (questionCreateUsers_select[i]) {
        questionCreateUsers_select[i].addEventListener('click', function(e){
            console.log(e.target.innerHTML);
            if (e.target.classList.contains('user_selected') == true) {
                e.target.classList.remove('user_selected');
                e.target.textContent = '選択する';
            } else {
                e.target.classList.add('user_selected');
                e.target.textContent = '選択中';
            }
        })
    }
}

let createAnswer_btn = document.getElementById('createAnswer_btn');
if (createAnswer_btn) {
    createAnswer_btn.addEventListener('click', function(e) {
        e.target.nextElementSibling.lastElementChild.click();
    })
}

function newTextCreate4() {
    area2.value = area.value;
	if (area2.value) {
	    //入力内容を改行ごとに分けて配列に格納
        let formText = area2.value.split('\n');
        //画像パスを拾う
        let aryCheck = formText.filter(value => value.includes('storage/answer_imgs/'));
        
        aryCheck.forEach(function(element) {
            //パス部分とテキスト部分を分ける
            let cutElem = element.substr(0, element.indexOf('.jpg') + 4);
            let cutText = element.substr(element.indexOf('.jpg') + 4);
            //パス部分にimgタグを付与して配列に格納し直す
            // let imgTag = "<img src=\"" + cutElem + "\">"
            // let imgTag = "<div class=\"PostContent-imgs\"><img style=\"max-width: 90%\" src=\"https://b0b0704b8c11464390acf6e91a447ae8.vfs.cloud9.us-west-2.amazonaws.com/" + cutElem + "\"></div>"
            console.log(cutElem);
            // cutElem = '../storage/content_imgs/Hokuto.1649828956409.jpg'; // 
            let imgTag = "<div class=\"PostContent-imgs\"><img style=\"max-width: 90%\" src=\"" + cutElem + "\"></div>"
            formText[formText.indexOf(element)] = imgTag;
            //テキスト部分を配列に格納
            formText.splice(formText.indexOf(imgTag) + 1, 0, cutText);
        });
        //入力内容の配列の要素を<br>で繋ぐ
        let newFormText = formText.join('<br>');
        
        area2.value = newFormText;
    }    
}

//保存ボタン取得
const answer_save_btn = document.getElementById('answer-save-btn');
//保存ボタンのクリックイベント
if (answer_save_btn) {
    answer_save_btn.addEventListener('click', function() {
    //textareaの入力内容にimgタグ付与
    newTextCreate4();
    //phpにpost
	let save = document.getElementById('postContent_save');
	save.click();
})
    
}

function addText6()
{

    var datetime = Date.now();
    var file_name =  user_name + "." + datetime + "." + "jpg";

    let fileName = document.getElementById('fileName');
    fileName.value = file_name;

	var text ="\n" + "storage/answer_imgs/" + file_name + "\n";
	
	//カーソルの位置を基準に前後を分割して、その間に文字列を挿入
	area.value = area.value.substr(0, area.selectionStart)
			+ text
			+ area.value.substr(area.selectionStart);
			
	newTextCreate4();
	
	let preview = document.getElementById('postContent_preview');
	preview.click();
	
}

const Genres = document.getElementsByClassName('genre');
for(let i = 0; i < Genres.length; i++) {
    Genres[i].addEventListener('click', switchGenres, false);
}

// ジャンルをクリックすると実行する関数
function switchGenres(){

    const arrayGenres = Array.prototype.slice.call(Genres);
    const index = arrayGenres.indexOf(this);
    const targetGenre = document.getElementsByClassName('genre')[index];
    const genreclasses = Array.from(targetGenre.classList);
    if (genreclasses.includes('genre_on') == true) {
        targetGenre.classList.remove('genre_on');
    } else {
        for (let i = 0; i < Genres.length; i++) {
            if (Genres[i].classList.contains('genre_on') == true) {
                Genres[i].classList.remove('genre_on')
            }
        }
        targetGenre.classList.add('genre_on');
    }
};

const items_search_btn = document.getElementById('items_search_btn');
if (items_search_btn) {
    items_search_btn.addEventListener('click', function(){
        let on_genres = document.getElementsByClassName('genre_on');
        if (on_genres[0]) {
            const genre_input = document.getElementById('genre_input');
            console.log(on_genres[0].title);
            genre_input.value = on_genres[0].title;
        } else {
            const genre_input = document.getElementById('genre_input');
            genre_input.value = "0";
        }
    })    
} 


const genre_search = document.getElementById('genre_search');
if (genre_search) {
    genre_search.addEventListener('click', function(e){
        const genre_list = document.getElementById('genre_list');
        const genre_header = document.getElementById('genre_header');
        if (e.target.innerHTML == 'ジャンル検索') {
            e.target.innerHTML = '閉じる';
            genre_header.classList.add('show_genre_header');
            genre_list.classList.add('show_genre_list');
        } else {
            e.target.innerHTML = 'ジャンル検索';
            genre_header.classList.remove('show_genre_header');
            genre_list.classList.remove('show_genre_list');
        }
    })   
}