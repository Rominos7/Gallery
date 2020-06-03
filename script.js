


let min_img = document.querySelectorAll('.smallimg img');
let $min_img_1 = document.querySelectorAll('.img-1');

for(let i = 0; i<$min_img_1.length/2;i++){

    $min_img_1[i].style.position='absolute';
    let j;
    j = 24.2*i;
    $min_img_1[i].style.left=j+'1%';

}

for(let i = $min_img_1.length/2; i<$min_img_1.length;i++){

    $min_img_1[i].style.position='absolute';
    $min_img_1[i].style.top='45%';
    let j;
    j = 24.2*(i-$min_img_1.length/2);
    $min_img_1[i].style.left=j+'1%';

}

let index = -1; // для того щоби спочатку завжди спрацьовувала друга умова якщо клікнемо на початкову картинку
let flag = false;

for(let i = 0; i<min_img.length;i++){

    min_img[i].addEventListener('click',function(){

        for(let j = 0; j<min_img.length;j++){
          $min_img_1[j].style.transform='scale(1,1)';
          $min_img_1[j].style.zIndex='0';
        }
        
        if(index == i){ // якщо ми клікнули на туж картинку, яка вже збільшена, то ми її зменшимо
            if(flag == false){ // якщо ми клікаємо на ту ж картинку декілька разів
                $min_img_1[i].style.transform='scale(1,1)';
                $min_img_1[i].style.zIndex='0';
                flag = true;
            }
            else{
                $min_img_1[i].style.transform='scale(1.6,1.6)';
                $min_img_1[i].style.zIndex='1';
                flag = false;
            }
            
            index = i;  
        }
        else{ // Умова 2
            $min_img_1[i].style.transform='scale(1.6,1.6)';
            $min_img_1[i].style.zIndex='1';
            index = i;
        }
    
    })

}

