<?php
	//entrada
	$id = $_GET['id'];

	//dados
$dados = [
	"0011128405" => [
		'nome' => 'Danilo',
		'idade' => '18',
		'turma' => '3º ano',
		'foto' => 'http://1.bp.blogspot.com/-Bi2lcb4AQGo/TVQq7Dsm7aI/AAAAAAAAAO4/kB9tQZ0f8xQ/s1600/feio+8.jpg'
	],
	"0011107556" => [
		'nome' => 'Roger',
		'idade' => '40',
		'turma' => '3º ano',
		'foto' => 'http://3.bp.blogspot.com/_aHWJu-nCtP8/TQAAeB_r2UI/AAAAAAAAADk/OOMM6VmPEAE/s1600/feio.jpg'
	],
];

	//retorno
	echo json_encode($dados[$id]);

