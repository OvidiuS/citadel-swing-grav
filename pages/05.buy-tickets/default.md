---
title: 'Buy Tickets'
process:
    markdown: true
    twig: true
---

### How to select your workshop level (where applicable)

Some tickets ask for a workshop level. Here's what the different levels are:

**Level 2:** you know most WCS basic patterns, but you still don’t feel confident when social dancing. You often feel disconnected from your partner and don’t know how it happened.

**Level 3:** you know basics of West Coast Swing and you feel confident when social dancing. You want to learn more about teamwork to make every dance as pleasant as possible. Your  connection loses its elasticity on very fast or very slow songs.

**Level 4:** you are not afraid of any tempo. You can social dance with partners of different levels (beginner to advanced) without any problem. You want to find your own style and start being more musical not only using the beat of the music but every one of its accents; you want to learn new variations, as well as new moves.

<h2 id="" data-fc-id="minicart-empty">Buy tickets</h2>

<h2 data-fc-id="minicart" id="" style="display:none;">
	 You have
		<a href="https://citadelswing.foxycart.com/cart?cart=view"><span data-fc-id="minicart-quantity">0</span>
		<span data-fc-id="minicart-singular"> ticket </span>
		<span data-fc-id="minicart-plural"> tickets </span></a>
		in your <a href="https://citadelswing.foxycart.com/cart?cart=view">cart</a>. Add more? :) <!-- Total cost: $
		<span data-fc-id="minicart-order-total">0</span> -->
	</a>
</h2>


<form class="well form-horizontal" action="https://citadelswing.foxycart.com/cart" method="post"  id="fcform">
<fieldset>
  <input type="hidden" name="name" value="Full Pass - Early Bird" />
  <input type="hidden" name="price" value="80" />
  <input type="hidden" name="code" value="CS17FP-ERL" />
  <input type="hidden" name="quantity" value="1" />

<!-- Form Name -->
<legend>Wpr</legend>

<!-- Text input-->

<div class="form-group">
  <label class="col-md-4 control-label">Ticket Holder Name</label>
  <div class="col-md-4 inputGroupContainer">
  <div class="input-group">
  <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
  <input  name="owner" placeholder="Full Name" class="form-control"  type="text">
    </div>
  </div>
</div>

<div class="form-group">
  <label class="col-md-4 control-label">WDSC ID</label>
  <div class="col-md-4 inputGroupContainer">
  <div class="input-group">
  <span class="input-group-addon"><i class="glyphicon glyphicon-star-empty"></i></span>
  <input  name="WDSC" placeholder="if you have one" class="form-control"  type="number">
    </div>
  </div>
</div>

<div class="form-group">
  <label class="col-md-4 control-label">Workshop Role</label>
    <div class="col-md-4 selectContainer">
    <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-list"></i></span>
    <select name="role" class="form-control selectpicker" >
      <option value="" default>please select</option>
      <option value="leader{c+-RL}">Leader</option>
      <option value="follower{c+-RF}">Follower</option>
    </select>
  </div>
</div>
</div>

<div class="form-group">
  <label class="col-md-4 control-label">Workshop Level</label>
    <div class="col-md-4 selectContainer">
    <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-list"></i></span>
    <select name="level" class="form-control selectpicker" >
      <option value="" default>please select</option>
      <option value="2{c+-L2}">Level 2</option>
      <option value="3{c+-L3}">Level 3</option>
      <option value="4{c+-L4}">Level 4</option>
    </select>
  </div>
</div>
</div>

<!-- Success message -->
<!-- <div class="alert alert-success" role="alert" id="success_message">Success <i class="glyphicon glyphicon-thumbs-up"></i> Thanks for contacting us, we will get back to you shortly.</div> -->

<!-- Button -->
<div class="form-group">
  <label class="col-md-4 control-label"></label>
  <div class="col-md-4">
    <button type="submit" class="btn btn-lg btn-danger" id="wrkshpFormSubmit">Add Tickets to Cart <span class="glyphicon glyphicon-chevron-right"></span></button>
  </div>
</div>

</fieldset>
</form>
