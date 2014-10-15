<?php
/**
 * Created by PhpStorm.
 * User: jary.chen
 * Date: 14-4-4
 * Time: 上午9:25
 */
define('DOME_APP','./respon static html/');

$urls = array(
  'index'=>'http://172.16.85.120/1/m/act/respon/index.html'
);

if(is_array($urls))
{
  foreach($urls as $key=>$val)
  {
    $url = parse_url($val);
    $html = file_get_contents($val);
    $filename = str_replace('/','',$url['path']);
    if(empty($filename))$filename = time();
    file_put_contents(DOME_APP.$key.'.html',$html);
  }
}
else
{
  $url = parse_url($urls);
  $html = file_get_contents($val);
//  $html = iconv('utf-8','gbk',$html);
  $filename = str_replace('/','',$url['path']);
  if(empty($filename))$filename = time();
  file_put_contents(DOME_APP.$filename.'_temp.html',$html);
}

?>

