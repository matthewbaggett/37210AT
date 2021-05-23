var selectedBackgroundColor = "#0186D1";
var blurBackgroundColor = "#44629E";
var focusBackgroundColor = "#7A96CC";
var cornerImageSrc = "image/menu.gif";

function setMenu ()
{
  var menuElementList = document.getElementById("menu").getElementsByTagName("a");

  for( var i = 0; i < menuElementList.length; i++ )
  {
  //menuElementList.item(i).setAttribute("target", "contentFrame"); //加上这句 跳转页面就乱跳
    insertCornerImage ( menuElementList.item(i) );
    setBackgroundColorToMenu ( menuElementList.item(i), blurBackgroundColor );
  menuElementList.item(i).onclick = function() { chengeSelectedMenu ( this ); }
    menuElementList.item(i).onmouseover = function() { focusMenu ( this ); }
    menuElementList.item(i).onmouseout = function() { blurMenu ( this ); }
    menuElementList.item(i).onfocus = function() { focusMenu ( this ); }
    menuElementList.item(i).onblur = function() { blurMenu ( this ); } 
    
    if( menuElementList.item(i).parentNode.className.match("selected") != null )
    {
      chengeSelectedMenu ( menuElementList.item(i) );
    }
  }
}

function insertCornerImage ( menu )
{
  var cornerTopLeftImageElement = createDecorationImgElement( cornerImageSrc, "cornerTopLeft");
  cornerTopLeftImageElement.style.top = "0";
  cornerTopLeftImageElement.style.left = "0";
  
  var cornerTopRightImageElement = createDecorationImgElement( cornerImageSrc, "cornerTopRight");
  cornerTopRightImageElement.style.top = "0";
  cornerTopRightImageElement.style.right = "0";

  menu.insertBefore( cornerTopRightImageElement, menu.firstChild );
  menu.insertBefore( cornerTopLeftImageElement, menu.firstChild );

  var cornerBottomLeftImageElement = createDecorationImgElement( cornerImageSrc, "cornerBottomLeft");
  cornerBottomLeftImageElement.style.bottom = "0";
  cornerBottomLeftImageElement.style.left = "0";

  var cornerBottomRightImageElement = createDecorationImgElement( cornerImageSrc, "cornerBottomRight");
  cornerBottomRightImageElement.style.right = "0";
  cornerBottomRightImageElement.style.bottom = "0";

  menu.appendChild( cornerBottomLeftImageElement );
  menu.appendChild( cornerBottomRightImageElement );
}

function createDecorationImgElement( src, className )
{
  var imageElement = document.createElement("img");

  imageElement.src = src;
  imageElement.className = className;
  imageElement.alt = "";
  
  imageElement.style.position = "absolute";
  imageElement.style.border = "none";

  return imageElement;
}

function setBackgroundColorToMenu ( menu, color )
{
  menu.style.backgroundColor = color;
  menu.style.borderTopColor = color;
  menu.style.borderBottomColor = color;

  for( var i = 0; i < menu.childNodes.length; i++ )
  {
    if( color == selectedBackgroundColor )
    {
      switch( menu.childNodes.item(i).className )
      {
        case "cornerTopLeft":
          menu.childNodes.item(i).style.clip = "rect(0px, 20px, 4px, 16px)";
          menu.childNodes.item(i).style.left = "-16px";
          break;
        case "cornerTopRight":
          menu.childNodes.item(i).style.clip = "rect(0px, 24px, 4px, 20px)";
          menu.childNodes.item(i).style.right = "0";
          break;
        case "cornerBottomLeft":
          menu.childNodes.item(i).style.clip = "rect(4px, 20px, 8px, 16px)";
          menu.childNodes.item(i).style.left = "-16px";
          break;
        case "cornerBottomRight":
          menu.childNodes.item(i).style.clip = "rect(4px, 24px, 8px, 20px)";
          menu.childNodes.item(i).style.right = "0";
          break;
      }
    }
    else if( color == focusBackgroundColor )
    {
      switch( menu.childNodes.item(i).className )
      {
        case "cornerTopLeft":
          menu.childNodes.item(i).style.clip = "rect(0px, 12px, 4px, 8px)";
          menu.childNodes.item(i).style.left = "-8px";
          break;
        case "cornerTopRight":
          menu.childNodes.item(i).style.clip = "rect(0px, 16px, 4px, 12px)";
          menu.childNodes.item(i).style.right = "-8px";
          break;
        case "cornerBottomLeft":
          menu.childNodes.item(i).style.clip = "rect(4px, 12px, 8px, 8px)";
          menu.childNodes.item(i).style.left = "-8px";
          break;
        case "cornerBottomRight":
          menu.childNodes.item(i).style.clip = "rect(4px, 16px, 9px, 12px)";
          menu.childNodes.item(i).style.right = "-8px";
          break;
      }
    }
    else
    {
      switch( menu.childNodes.item(i).className )
      {
        case "cornerTopLeft":
          menu.childNodes.item(i).style.clip = "rect(0px, 4px, 4px, 0px)";
          menu.childNodes.item(i).style.left = "0";
          break;
        case "cornerTopRight":
          menu.childNodes.item(i).style.clip = "rect(0px, 8px, 4px, 4px)";
          menu.childNodes.item(i).style.right = "-16px";
          break;
        case "cornerBottomLeft":
          menu.childNodes.item(i).style.clip = "rect(4px, 4px, 8px, 0px)";
          menu.childNodes.item(i).style.left = "0";
          break;
        case "cornerBottomRight":
          menu.childNodes.item(i).style.clip = "rect(4px, 8px, 8px, 4px)";
          menu.childNodes.item(i).style.right = "-16px";
          break;
      }
    }
  }
}

function chengeSelectedMenu ( selectedMenu )
{
  var menuElementList = document.getElementById("menu").getElementsByTagName("a");
  
  for( var i = 0; i < menuElementList.length; i++ )
  {
    menuElementList.item(i).removeAttribute("class");
    setBackgroundColorToMenu ( menuElementList.item(i), blurBackgroundColor );
  }
  
  selectedMenu.setAttribute("class", "selected");
  setBackgroundColorToMenu ( selectedMenu, selectedBackgroundColor );
}

function focusMenu ( menu )
{
  
  if( menu.getAttribute("class") != "selected" )
  {
    setBackgroundColorToMenu ( menu, focusBackgroundColor );
  }
}

function blurMenu ( menu )
{
  
  if( menu.getAttribute("class") != "selected" )
  {
    setBackgroundColorToMenu ( menu, blurBackgroundColor );
  }
}