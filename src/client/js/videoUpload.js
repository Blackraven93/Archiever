const videoCategories = document.querySelector(".video__categories");
const videoCategoriesPlusBtn = document.querySelector(".video__categories__btn");
const videoCategoriesBox = document.querySelector(".video__categories__box");
const videoTags = document.querySelector(".video__tags");
const videoTagsPlusBtn = document.querySelector(".video__tags__btn");
const videoTagsBox = document.querySelector(".video__tags__box");


const handleVideoCategories = (event) => {
    event.preventDefault();
    const categoryTags = document.createElement('div')
    const categoryTag = document.createElement('span');
    const categoryDelete = document.createElement('button');
    categoryTag.innerText = videoCategories.value
    categoryDelete.innerText = "❌"
    categoryTags.appendChild(categoryTag);
    categoryTags.appendChild(categoryDelete);
    videoCategoriesBox.appendChild(categoryTags);
    videoCategories.value = ""
};

const handleVideoTags = (event) => {
    event.preventDefault();
    let tag = document.createElement('span')
    tag.innerText = videoTags.value
    videoTagsBox.appendChild(tag);
};




videoCategoriesPlusBtn.addEventListener("click", handleVideoCategories);
videoTagsPlusBtn.addEventListener("click", handleVideoTags);