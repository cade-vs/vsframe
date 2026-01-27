/*****************************************************************************
**
**  vsFRAME -- VIRTUAL HTML FRAMES MACHINERY
**  (c) 2018-2026 Vladi Belperchinov-Shabanski "Cade" <cade@noxrun.com>
**
**  LICENSE: GPLv2
**
******************************************************************************
**
**  usage: html text <div class=vsframe>virtual html frame</div> more html
**
**  note:  include <script src="vsframe.js"></script> somewhere in the html
**
**  for more, visit: https://github.com/cade-vs/vsframe
**
*****************************************************************************/

function vsframe_init()
{
  document.onclick = on_document_click;
}

function on_document_click( event ) 
{ 
  var target = event.target;

  // alert('on doc click on  ' + target.tagName );

  if( target.tagName == 'IMG'   ) // assumed IMG inside A
    return on_click_img( event, target );

  if( target.tagName == 'A' ) 
    return on_click_anchor( event, target );

  if( ( target.tagName == 'INPUT' && target.type == "submit" ) || target.tagName == 'BUTTON' )
    return on_click_submit( event, target );

  // nothing found, perhaps clicked element inside A, try to find one
  var trget_a = target.closest( "A" );
  if( trget_a ) 
    return on_click_anchor( event, trget_a );
    
}

function on_click_img( event, target )
{
  var parent_target = target.closest( "A" );
  if( parent_target )
    return on_click_anchor( event, parent_target );
  else
    return false;  
}

function on_click_anchor( event, target )
{  
  var vsframe;
//alert('click on a');
  if( target.target != '' )
    return;

  var vfr_target_id = target.dataset.vsframeTarget;
  if( vfr_target_id )
    vsframe = document.getElementById( vfr_target_id );
//alert('found target vsframe: ' + vsframe );

  if( ! vsframe )
    vsframe = target.closest( ".vsframe" );

//alert('found closest vsframe: ' + vsframe );
    
  if( ! vsframe )
    return;

  var href = target.href;
  http_get( href, function( xhr ) { http_request_handler( xhr, target, vsframe ); } );

  event.stopPropagation(); 
  return false; 
}

function on_click_submit( event, target )
{
  var vsframe = target.closest( ".vsframe" );
  if( ! vsframe )
    {
    return;
    }

  var subm = null;
  
  if( target.tagName == "BUTTON" || target.tagName == "INPUT" ) subm = target;

  var form = target.form;
  var data = new FormData( form, subm );
  http_request( form.method, form.action, data, function( xhr ) { http_request_handler( xhr, target, vsframe ); } );

  if( event ) 
    event.stopPropagation(); 
  return false; 
}

function http_get( url, callback )
{
  http_request( "GET", url, null, callback );
}

function http_request( method, url, data, callback )
{
    var cs  = document.characterSet;
    var xhr = new XMLHttpRequest();
    xhr.onload = function() { callback( xhr ); };
    xhr.open( method, url );
    xhr.send( data );
}

function http_request_handler( xhr, target, vsframe )
{
  if( xhr.status == 200 )
    vsframe.innerHTML = xhr.responseText;
  else
    alert( "Error requesting resource! Please, try again later or contact server administrator..." );
}


vsframe_init();


/*** eof ********************************************************************/
