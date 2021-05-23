//判断text是否存在
function select_judge_havetext(selobj,text) 
{                    
    var isExit = -1;
    var length = document.getElementById(selobj).options.length;
    
    for (var i = 0; i < length; i++) 
    {
        var tmp = document.getElementById(selobj).options[i].text;         
        
        if (tmp == text) 
        {        
            isExit = i;        
            break;        
        } 
    }
    
    return isExit;       
} 
//判断value是否存在
function select_judge_havevalue(selobj,value) 
{        
    var isExit = -1;
    var length = document.getElementById(selobj).options.length;
      
    for (var i = 0; i < length; i++) 
    {
        var tmp = document.getElementById(selobj).options[i].value;   
         
        if (tmp == value) 
        {        
            isExit = i;        
            break;        
        }        
    }  
          
    return isExit;        
}



//添加
function select_add(selobj, text, value)
{
    var varItem = new Option(text,value);    
    
    document.getElementById(selobj).options.add(varItem);   
}



//清空所有
function select_removeall(selobj)
{
    document.getElementById(selobj).options.length=0; 
}
//据index删除
function select_del_byindex(selobj, index)
{
    document.getElementById(selobj).options.remove(index); 
}
//删除当前选中
function select_del_cursel(selobj)
{
    var length = document.getElementById(selobj).options.length;
        
    for(var i = 0; i < length; i++)
    {   
        var tmp = document.getElementById(selobj).options[i].selected; 
        
        if(tmp == true)
        {    
            select_del_byindex(selobj, i);
            break;    
        }    
    }    
}
//据value删除
function select_del_byvalue(selobj, value)
{
    var index;
    
    index = select_judge_havevalue(selobj, value);
    if(index >= 0)
    {
        select_del_byindex(selobj, index);
    }
}
//据text删除
function select_del_bytext(selobj, text)
{
    var index;
  
    index = select_judge_havetext(selobj, text);
    if(index >= 0)
    {
        select_del_byindex(selobj, index);
    }
}



//取得当前选中索引号
function select_get_selindex(selobj)
{
    var selIndex;
    
    selIndex = document.getElementById(selobj).selectedIndex;
    
    return selIndex;
}
//取得当前选中text
function select_get_seltext(selobj)
{
    var text;
    var selindex;
    
    selindex = select_get_selindex(selobj);
    text = document.getElementById(selobj).options[selindex].text;
    
    return text;
}
//取得当前选中value
function select_get_selvalue(selobj)
{
    var value;
    
    value = document.getElementById(selobj).value;
    
    return value;
}
//设置value
function select_set_selvalue(selobj, value)
{
    document.getElementById(selobj).value = value;
}