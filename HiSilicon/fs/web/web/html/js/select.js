//�ж�text�Ƿ����
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
//�ж�value�Ƿ����
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



//���
function select_add(selobj, text, value)
{
    var varItem = new Option(text,value);    
    
    document.getElementById(selobj).options.add(varItem);   
}



//�������
function select_removeall(selobj)
{
    document.getElementById(selobj).options.length=0; 
}
//��indexɾ��
function select_del_byindex(selobj, index)
{
    document.getElementById(selobj).options.remove(index); 
}
//ɾ����ǰѡ��
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
//��valueɾ��
function select_del_byvalue(selobj, value)
{
    var index;
    
    index = select_judge_havevalue(selobj, value);
    if(index >= 0)
    {
        select_del_byindex(selobj, index);
    }
}
//��textɾ��
function select_del_bytext(selobj, text)
{
    var index;
  
    index = select_judge_havetext(selobj, text);
    if(index >= 0)
    {
        select_del_byindex(selobj, index);
    }
}



//ȡ�õ�ǰѡ��������
function select_get_selindex(selobj)
{
    var selIndex;
    
    selIndex = document.getElementById(selobj).selectedIndex;
    
    return selIndex;
}
//ȡ�õ�ǰѡ��text
function select_get_seltext(selobj)
{
    var text;
    var selindex;
    
    selindex = select_get_selindex(selobj);
    text = document.getElementById(selobj).options[selindex].text;
    
    return text;
}
//ȡ�õ�ǰѡ��value
function select_get_selvalue(selobj)
{
    var value;
    
    value = document.getElementById(selobj).value;
    
    return value;
}
//����value
function select_set_selvalue(selobj, value)
{
    document.getElementById(selobj).value = value;
}