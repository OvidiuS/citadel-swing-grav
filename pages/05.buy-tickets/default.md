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

<h2 id="fcFormTitle">Buy tickets</h2>

<p data-fc-id="minicart" id="minicart" style="display:none;">
	<a href="https://citadelswing.foxycart.com/cart?cart=view">
		<span data-fc-id="minicart-quantity">0</span>
		<span data-fc-id="minicart-singular"> item </span>
		<span data-fc-id="minicart-plural"> items </span>
		in cart. Total cost: $
		<span data-fc-id="minicart-order-total">0</span>
	</a>
</p>

[Red Cool Example](https://citadelswing.foxycart.com/cart?name=Cool%20Example&price=10&color=red&code=sku123)

<!-- form example -->
<form id="fcform" action="https://citadelswing.foxycart.com/cart" method="post" accept-charset="utf-8">
<input type="hidden" name="name" value="Full Pass - Early Bird" />
<input type="hidden" name="price" value="80" />
<input type="hidden" name="code" value="CS17FP-ERL" />

<label>Ticket Holder Name</label>
<input type="text" name="owner" required />

<label>WSDC ID</label>
<input type="text" name="WDSC" />

<label class="label_left">Role</label>
<select name="role" required>
    <option value="" default>please select</option>
    <option value="leader{c+-RL}">Leader</option>
    <option value="follower{c+-RF}">Follower</option>
</select>

<label class="label_left">Workshop Level</label>
<select name="level" required>
    <option value="" default>please select</option>
    <option value="2{c+-L2}">Level 2</option>
    <option value="3{c+-L3}">Level 3</option>
    <option value="4{c+-L4}">Level 4</option>
</select>

<input type="submit" value="Add Pass to Cart" class="submit" />
</form>
