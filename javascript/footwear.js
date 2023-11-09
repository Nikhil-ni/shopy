function image1()
{
    document.getElementById("photos").style.display="block"
    document.getElementById("orderBut").style.display="block"
    document.getElementById("vedio").style.display="none"
    document.getElementById("shoeContainer").style.display="none"
    document.getElementById("shoeContainer1").style.display="none"
    document.getElementById("text").style.display="none"
    document.getElementById("textOnVed").style.display="none"
    document.getElementById("photos1").style.display="none"
    document.getElementById("photos2").style.display="none"
    document.getElementById("photos3").style.display="none"
    document.getElementById("photos4").style.display="none"
    document.getElementById("photos5").style.display="none"
    document.getElementById("vedioContainer").style.display="none"
}
function image2()
{
    document.getElementById("photos1").style.display="block"
    document.getElementById("orderBut").style.display="block"
    document.getElementById("vedio").style.display="none"
    document.getElementById("shoeContainer").style.display="none"
    document.getElementById("shoeContainer1").style.display="none"
    document.getElementById("text").style.display="none"
    document.getElementById("textOnVed").style.display="none"
    document.getElementById("photos").style.display="none"
    document.getElementById("photos2").style.display="none"
    document.getElementById("photos3").style.display="none"
    document.getElementById("photos4").style.display="none"
    document.getElementById("photos5").style.display="none"
    document.getElementById("vedioContainer").style.display="none"

}
function image3()
{
    document.getElementById("photos2").style.display="block"
    document.getElementById("orderBut").style.display="block"
    document.getElementById("vedio").style.display="none"
    document.getElementById("shoeContainer").style.display="none"
    document.getElementById("shoeContainer1").style.display="none"
    document.getElementById("text").style.display="none"
    document.getElementById("textOnVed").style.display="none"
    document.getElementById("photos").style.display="none"
    document.getElementById("photos1").style.display="none"
    document.getElementById("photos3").style.display="none"
    document.getElementById("photos4").style.display="none"
    document.getElementById("photos5").style.display="none"
    document.getElementById("vedioContainer").style.display="none"


}
function image4()
{
    document.getElementById("photos3").style.display="block"
    document.getElementById("orderBut").style.display="block"
    document.getElementById("vedio").style.display="none"
    document.getElementById("shoeContainer").style.display="none"
    document.getElementById("shoeContainer1").style.display="none"
    document.getElementById("text").style.display="none"
    document.getElementById("textOnVed").style.display="none"
    document.getElementById("photos").style.display="none"
    document.getElementById("photos1").style.display="none"
    document.getElementById("photos2").style.display="none"
    document.getElementById("photos4").style.display="none"
    document.getElementById("photos5").style.display="none"
    document.getElementById("vedioContainer").style.display="none"


}
function image5()
{
    document.getElementById("photos4").style.display="block"
    document.getElementById("orderBut").style.display="block"
    document.getElementById("vedio").style.display="none"
    document.getElementById("shoeContainer").style.display="none"
    document.getElementById("shoeContainer1").style.display="none"
    document.getElementById("text").style.display="none"
    document.getElementById("textOnVed").style.display="none"
    document.getElementById("photos").style.display="none"
    document.getElementById("photos1").style.display="none"
    document.getElementById("photos2").style.display="none"
    document.getElementById("photos3").style.display="none"
    document.getElementById("photos5").style.display="none"
    document.getElementById("vedioContainer").style.display="none"


}
function image6()
{
    document.getElementById("photos5").style.display="block"
    document.getElementById("orderBut").style.display="block"
    document.getElementById("vedio").style.display="none"
    document.getElementById("shoeContainer").style.display="none"
    document.getElementById("shoeContainer1").style.display="none"
    document.getElementById("text").style.display="none"
    document.getElementById("textOnVed").style.display="none"
    document.getElementById("photos").style.display="none"
    document.getElementById("photos1").style.display="none"
    document.getElementById("photos2").style.display="none"
    document.getElementById("photos3").style.display="none"
    document.getElementById("photos4").style.display="none"
    document.getElementById("vedioContainer").style.display="none"
}
function homePage()
{
    location.href="file:///D:/web%20technology%20project/index.html"
}
function addToCard()
{
    var button=document.getElementById("addToCard").value
    if(button=="Add To Card")
    {
        document.getElementById("addToCard").setAttribute("value","Added To Card")
        document.getElementById("messageContainer").style.display="block"
    }
    else if(button=="Added To Card")
    {
       document.getElementById("addToCard").setAttribute("value","Remove From The Card")
       document.getElementById("messageContainer").style.display="none"

    }
    else{
        document.getElementById("addToCard").setAttribute("value","Add To Card")
    }
}
function X()
{
    document.getElementById("messageContainer").style.display="none"
}

function loginPage1()
{
    document.getElementById("loginPage").style.display="block"
    document.getElementById("BrandContainer").style.display="none"
    document.getElementById("vedioContainer").style.display="none"
    document.getElementById("shoeContainer").style.display="none"
    document.getElementById("shoeContainer1").style.display="none"
    document.getElementById("text").style.display="none"
    document.getElementById("textOnVed").style.display="none"
    document.getElementById("signUpPage").style.display="none"
    document.getElementById("photos").style.display="none"
    document.getElementById("photos1").style.display="none"
    document.getElementById("photos2").style.display="none"
    document.getElementById("photos3").style.display="none"
    document.getElementById("photos4").style.display="none"
    document.getElementById("photos5").style.display="none"
    document.getElementById("orderBut").style.display="none"  
}
function okBut()
{
    document.getElementById("loadMessage").style.display="none"
    document.getElementById("signUpPage").style.display="block"
    document.getElementById("photos").style.display="none"
    document.getElementById("photos1").style.display="none"
    document.getElementById("photos2").style.display="none"
    document.getElementById("photos3").style.display="none"
    document.getElementById("photos4").style.display="none"
    document.getElementById("photos5").style.display="none"
    document.getElementById("orderBut").style.display="none"
    document.getElementById("BrandContainer").style.display="none"
}
function cancelBut()
{
    document.getElementById("loadMessage").style.display="none"
}
function signUpPage()
{
    document.getElementById("signUpPage").style.display="block"
    document.getElementById("loginPage").style.display="none"
    
}
var allInput=document.querySelectorAll("input")
console.log(allInput)

function backToLoginPage()
{
    var empName=allInput[11].value
    var empMail=allInput[12].value
    var empNewPass=allInput[13].value
    var empConfirmPass=allInput[14].value
    var eGenderM=allInput[15].value
    var eGenderF=allInput[16].value
    var eGenderO=allInput[17].value
    localStorage.setItem("EName",empName);
    localStorage.setItem("EMail",empMail);
    localStorage.setItem("ENewpass",empNewPass);
    localStorage.setItem("EConfirmPass",empConfirmPass);
    localStorage.setItem("EGenM",eGenderM);
    localStorage.setItem("EGenF",eGenderF);
    localStorage.setItem("EGenO",eGenderO);
    var newPasslen1=empNewPass.length
    var confirmPasslen=empConfirmPass.length
    
     if(newPasslen1==confirmPasslen)
    {
        document.getElementById("loginPage").style.display="block"
        document.getElementById("signUpPage").style.display="none"
    }
else{
        document.getElementById("errorText").style.display="block"
    }
}
function BackToHomePage()
{
    var loginEmail=allInput[20].value
    allInput[20].minLength="2"
    allInput[20].maxLength="20"
    var loginPass=allInput[21].value
    var empMail=allInput[12].value
    var empConfirmPass=allInput[14].value
    localStorage.setItem("loginEmail",loginEmail)
    localStorage.setItem("loginPass",loginPass)
    var Email=empMail.length
    var confirmPasslen=empConfirmPass.length
    var loginE=loginEmail.length
    var loginP=loginPass.length
    if(loginE==Email && loginP==confirmPasslen)
    {
      document.getElementById("shippingContainer").style.display="block"
      document.getElementById("loginPage").style.display="none"
      document.getElementById("continueBut").style.display="block"

    }
    else{
        document.getElementById("loginMessage").style.display="block"
    }
}
function changePassPage()
{
    document.getElementById("changePassContainer").style.display="block"
    document.getElementById("loginPage").style.display="none"
}
function changeForgotPass()
{
    var newPass=allInput[22].value
    var confirmPass=allInput[23].value
    localStorage.setItem("newPass",newPass)
    localStorage.setItem("confirmPass",confirmPass)
    var newP=newPass.length
    var confirmP=confirmPass.length
    if(newP==confirmP)
    {
        document.getElementById("loginPage").style.display="block"
        document.getElementById("changePassContainer").style.display="none"
    }
    else{
        document.getElementById("changePassText").style.display="block"
    }
}
function buyOrder()
{
    document.getElementById("loadMessage").style.display="block"
}
 function paymentDetails()
 {
    var Ename1=allInput[26].value
    var MNumber=allInput[27].value
    var addressM=allInput[28].value
    var addressD=allInput[29].value
    localStorage.setItem("newPass",Ename1)
    localStorage.setItem("mobileNumber",MNumber)
    document.getElementById("paymentContainer").style.display="block"
    document.getElementById("shippingContainer").style.display="none"

 }
 function paymentSuccess()
 {
    alert("your payment can be successfull and order can be deliver to your shipping address")
    location.href="file:///D:/web%20technology%20project/index.html"
 }