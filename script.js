function jQuery (selector, context = document){
	this.elements = Array.from(context.querySelectorAll(selector));
	return this
}

jQuery.prototype.each = function (fn){
	this.elements.forEach((element, index) => fn.call(element, element, index));
	return this;
}

jQuery.prototype.click = function(fn){
	this.each(element => element.addEventListener('click', fn))
	return this
}

jQuery.prototype.hide = function(){
	this.each(element => element.style.display = 'none')
  return this;
}

jQuery.prototype.show = function(){
	this.each(element => element.style.display = '')
  return this;
}

jQuery.prototype.remove = function(){
	this.each(element => element.remove())
  return this;
}

jQuery.prototype.class = function(name){
	this.each(element => element.className = name)
  return this;
}


jQuery.prototype.html = function(context, get_set = 'get'){
    if (get_set == 'get') {
        this.each(element => element.innerHTML = context);
        return this;
    }
    if (get_set == 'set') {
        this.each(element => context = element.innerHTML);
        console.log(context);
        return context;
    }
};

jQuery.prototype.text = function(context, get_set = 'get'){
    if (get_set == 'get') {
        this.each(element => element.innerText = context);
        return this;
    }
    if (get_set == 'set') {
        this.each(element => context = element.innerText);
        console.log(context);
        return context;
    }
};

var $ = (e) => new jQuery(e);

$('.btn_get').click(e => getRandomDog(''));
$('.btn_set').click(e => $('.content').html('', 'set'));

$('.btn_get_text').click(e => $('.content').text('новый текст для вывода', 'get'));
$('.btn_set_text').click(e => $('.content').text('', 'set'));

// $('button').hide().show().click(e => console.log(e)).class('name')

function getRandomDog (breed){

    if(!isNaN(breed)){
        breed = 'boxer';
    }

    // var content = document.querySelector(".content");

    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(function(response){
        // Так как в Network у нас JSON объект, надо преобразовать его в обычный объект
        return response.json(); 
    })
    .then(function(response){
        // После преобразования обратимся к полю с URL
        const img_return = `<img src="${response.message}" alt="dog">`;
        $('.content').html(img_return);

    });

}























