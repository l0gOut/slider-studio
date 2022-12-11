const titleNavigation = document.querySelectorAll(".title-navigation");
const circleNavigator = document.querySelectorAll(".page-navigator");
const descriptionTitle = document.querySelectorAll(".image-description");
const arrowRight = document.querySelector(".navigation-arrow-right");
const arrowLeft = document.querySelector(".navigation-arrow-left");
const picture = document.querySelector(".picture");

const projectDescriptionList = [
  ["Rostov-on-DonLCD admiral", "81 m2", "3.5 months", "Upon request"],
  ["Sochi Thieves", "105 m2", "4 months", "Upon request"],
  ["Rostov-on-Don Patriotic", "93 m2", "3 months", "Upon request"],
];

circleNavigator.forEach(item => {
  item.addEventListener("click", toggleActiveArrow);
});

titleNavigation.forEach(item => {
  item.addEventListener("click", toggleActiveTitle);
});

arrowLeft.addEventListener("click", () => {
  for (let item of circleNavigator) {
    if (item.classList.contains("active")) {
      switch (item.classList[1]) {
        case "item-1":
          item.classList.remove("active");
          circleNavigator[2].classList.add("active");
          titleNavigation[0].classList.remove("active");
          titleNavigation[2].classList.add("active");
          descriptionTitle[0].innerHTML = projectDescriptionList[2][0];
          descriptionTitle[1].innerHTML = projectDescriptionList[2][1];
          descriptionTitle[2].innerHTML = projectDescriptionList[2][2];
          descriptionTitle[3].innerHTML = projectDescriptionList[2][3];
          picture.src =
            picture.src.substring(0, picture.src.length - 5) + "3.jpg";
          break;
        case "item-2":
          item.classList.remove("active");
          circleNavigator[0].classList.add("active");
          titleNavigation[1].classList.remove("active");
          titleNavigation[0].classList.add("active");
          descriptionTitle[0].innerHTML = projectDescriptionList[0][0];
          descriptionTitle[1].innerHTML = projectDescriptionList[0][1];
          descriptionTitle[2].innerHTML = projectDescriptionList[0][2];
          descriptionTitle[3].innerHTML = projectDescriptionList[0][3];
          picture.src =
            picture.src.substring(0, picture.src.length - 5) + "1.jpg";
          break;
        case "item-3":
          item.classList.remove("active");
          circleNavigator[1].classList.add("active");
          titleNavigation[2].classList.remove("active");
          titleNavigation[1].classList.add("active");
          descriptionTitle[0].innerHTML = projectDescriptionList[1][0];
          descriptionTitle[1].innerHTML = projectDescriptionList[1][1];
          descriptionTitle[2].innerHTML = projectDescriptionList[1][2];
          descriptionTitle[3].innerHTML = projectDescriptionList[1][3];
          picture.src =
            picture.src.substring(0, picture.src.length - 5) + "2.jpg";
          break;
        default:
          console.log("Если вы это видите значит что-то сломалось...");
      }
      break;
    }
  }
});

arrowRight.addEventListener("click", () => {
  for (let item of circleNavigator) {
    if (item.classList.contains("active")) {
      switch (item.classList[1]) {
        case "item-1":
          item.classList.remove("active");
          circleNavigator[1].classList.add("active");
          titleNavigation[0].classList.remove("active");
          titleNavigation[1].classList.add("active");
          descriptionTitle[0].innerHTML = projectDescriptionList[1][0];
          descriptionTitle[1].innerHTML = projectDescriptionList[1][1];
          descriptionTitle[2].innerHTML = projectDescriptionList[1][2];
          descriptionTitle[3].innerHTML = projectDescriptionList[1][3];
          picture.src =
            picture.src.substring(0, picture.src.length - 5) + "2.jpg";
          break;
        case "item-2":
          item.classList.remove("active");
          circleNavigator[2].classList.add("active");
          titleNavigation[1].classList.remove("active");
          titleNavigation[2].classList.add("active");
          descriptionTitle[0].innerHTML = projectDescriptionList[2][0];
          descriptionTitle[1].innerHTML = projectDescriptionList[2][1];
          descriptionTitle[2].innerHTML = projectDescriptionList[2][2];
          descriptionTitle[3].innerHTML = projectDescriptionList[2][3];
          picture.src =
            picture.src.substring(0, picture.src.length - 5) + "3.jpg";
          break;
        case "item-3":
          item.classList.remove("active");
          circleNavigator[0].classList.add("active");
          titleNavigation[2].classList.remove("active");
          titleNavigation[0].classList.add("active");
          descriptionTitle[0].innerHTML = projectDescriptionList[0][0];
          descriptionTitle[1].innerHTML = projectDescriptionList[0][1];
          descriptionTitle[2].innerHTML = projectDescriptionList[0][2];
          descriptionTitle[3].innerHTML = projectDescriptionList[0][3];
          picture.src =
            picture.src.substring(0, picture.src.length - 5) + "1.jpg";
          break;
        default:
          console.log("Если вы это видите значит что-то сломалось...");
      }
      break;
    }
  }
});

function toggleActiveArrow(i) {
  circleNavigator.forEach(item => {
    item.classList.remove("active");
  });

  titleNavigation.forEach(item => {
    item.classList.remove("active");
  });

  i.target.classList.toggle("active");
  document
    .querySelector(`.title-navigation.${i.target.classList[1]}`)
    .classList.add("active");

  descriptionTitle[0].innerHTML =
    projectDescriptionList[i.target.classList[1][5] - 1][0];
  descriptionTitle[1].innerHTML =
    projectDescriptionList[i.target.classList[1][5] - 1][1];
  descriptionTitle[2].innerHTML =
    projectDescriptionList[i.target.classList[1][5] - 1][2];
  descriptionTitle[3].innerHTML =
    projectDescriptionList[i.target.classList[1][5] - 1][3];
  picture.src =
    picture.src.substring(0, picture.src.length - 5) +
    i.target.classList[1][5] +
    ".jpg";
}

function toggleActiveTitle(i) {
  circleNavigator.forEach(item => {
    item.classList.remove("active");
  });

  titleNavigation.forEach(item => {
    item.classList.remove("active");
  });

  i.target.classList.toggle("active");

  document
    .querySelector(`.page-navigator.${i.target.classList[1]}`)
    .classList.add("active");

  descriptionTitle[0].innerHTML =
    projectDescriptionList[i.target.classList[1][5] - 1][0];
  descriptionTitle[1].innerHTML =
    projectDescriptionList[i.target.classList[1][5] - 1][1];
  descriptionTitle[2].innerHTML =
    projectDescriptionList[i.target.classList[1][5] - 1][2];
  descriptionTitle[3].innerHTML =
    projectDescriptionList[i.target.classList[1][5] - 1][3];
  picture.src =
    picture.src.substring(0, picture.src.length - 5) +
    i.target.classList[1][5] +
    ".jpg";
}
