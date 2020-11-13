$('.firstComment').on("click", "#deleteLink", function(){
$(this).parents()[2].remove()
})

$('.firstComment').on("click", "#editLink", function(){
    let childFinder = $(this).parents()[2];

    console.log(childFinder)

    let item = $(childFinder).children()[1];
    console.log(item)

    $(item).toggleClass("noDisplay")
})

$('.firstComment').on("click", "#editSubmit", function(){
    $(this)
console.log('made it5')

$(this).prev().val()

let spleen = $(this).prev().val()

console.log (spleen)

let siblingFinder = $(this).parents()[1]

 let newFinder=$(siblingFinder).children()[0]

 $(newFinder).children()[1]

 

 let vNewFinder=$(newFinder).children()[1]

 $(vNewFinder).children[1]

 

 let cvNewFinder = $(vNewFinder).children()[1]

 $(cvNewFinder).children()

  let zxcNewFinder=$(cvNewFinder).children()

  $(zxcNewFinder).text(spleen)

 

})


$('#submitBtn').on("click", function(){
    console.log('made it')

    let i=$('#commentForm').val()
    
    console.log(i)
    
    let j=$('#userNameForm').val()
        
    console.log(j)
 $('.firstComment').prepend(`
 <div class="commentContainer">
 <div class="comment">
    <div><img src="person.png" alt=person icon>
    <div>
    <h6>${j}</h6>
    <div class="xment"><p>${i}</p></div>
    </div></div>
    
    <div class="editFormClass noDisplay"><input type="text' id="editForm"</input></form>
    <input type="submit" value="Submit" id="editSubmit"></div>
    
    <div class= "linkWrapper">

    

       <div class="editClass"><a href="#" id="editLink">Edit</a></div>
       <div class="deleteClass"><a href="#" id="deleteLink">Delete</a></div>

       </div>
       <hr>
 `)   

}) 

