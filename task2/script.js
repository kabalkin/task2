
i = 0;
j=0;
function press1(f) {

if(i % 2===0) f.but.value = "Стоп"
else f.but.value = "Старт"
i++
}
function press2(f) {

if(j % 2===0) f.but.value = "Отключиться"
else f.but.value = "Подключиться"
j++
}