<?php

$arr = ['zs','ls','ww'];

$u = $_GET['u'];

if (in_array($u,$arr)) {
  echo 1;
}else{
  echo 0;
}