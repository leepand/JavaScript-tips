<html>
<head>
<script type="text/javascript">
function getInnerHTML()
  {
  //alert(document.getElementById("th1").innerHTML);
document.getElementById("th1").innerHTML ="leepandddd";
  $("#th1").html('leepand');
  }
</script>
</head>
<body>

<table border="1">
<tr id="tr1">
<th id="th1">Firstname</th>
<th>Lastname</th>
</tr>
<tr id="tr2">
<td>Peter</td>
<td>Griffin</td>
</tr>
</table>
<br />
<input type="button" onclick="getInnerHTML()" value="Alert innerHTML of table row" />

</body>
</html>

