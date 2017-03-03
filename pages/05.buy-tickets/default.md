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


<form class="well form-horizontal" data-disable="false" action="https://citadelswing.foxycart.com/cart" method="post"  id="fcform" data-toggle="validator">
<fieldset>
<!-- Form Name -->
<!-- <legend>Workshop Passes</legend> -->

<h3 class="redBg formSectionHeader">Owner Info</h3>
      <p>You will be able to buy tickets for multiple people in one transaction, but you need to add the to the cart for one person at a time.</p>

<!-- Text input-->

<div class="form-group">
  <label class="col-md-4 control-label">Ticket Holder Name</label>
  <div class="col-md-6 inputGroupContainer">
    <div class="input-group">
      <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
      <input  name="owner" placeholder="Full Name" class="form-control input-lg"  type="text" id="visibleOwnerField" required>
    </div>
  </div>
  <div class="col-md-6 col-md-offset-4 help-block with-errors"></div>
</div>

<div class="form-group">
  <label class="col-md-4 control-label">WDSC ID</label>
  <div class="col-md-6 inputGroupContainer">
  <div class="input-group">
  <span class="input-group-addon"><i class="glyphicon glyphicon-star-empty"></i></span>
  <input  name="WDSC" placeholder="if it exists" class="form-control input-lg"  type="number">
    </div>
  </div>
</div>


    <h3 class="redBg formSectionHeader">Choose your path:</h3>
    <div class="panel-group" id="accordion">
      <div class="panel panel-default">
          <div class="panel-heading">
              <h4 class="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#fullPass" id="fullPassLink">1. Full Pass (EUR 85)  - includes party pass</a>
              </h4>
          </div>
          <div id="fullPass" class="panel-collapse collapse">
              <div class="panel-body">
                <div class="row">
                  <div class="col-md-3">
                    <input type="checkbox" id="fake" class="pull-right" required checked disabled/>
                  </div>
                    <div class="col-md-9">
                      <h4>Early Bird workshop Pass (EUR 85)</h4>
                      <p>Offer Expires in 1 month</p>
                    </div>

                    <input type="hidden" disabled name="name" value="Full Pass - Early Bird" />
                    <input type="hidden" disabled name="price" value="85" />
                    <input type="hidden" disabled name="code" value="CS17FP-ERL" />

                    <div class="form-group">
                      <label class="col-md-4 control-label">Workshop Role</label>
                        <div class="col-md-4 selectContainer">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-list"></i></span>
                        <select name="role" disabled class="form-control input-lg selectpicker" required data-required-error="Please select a role." disabled>
                          <option value="" default>please select</option>
                          <option value="leader{c+-RL}">Leader</option>
                          <option value="follower{c+-RF}">Follower</option>
                        </select>
                      </div>
                    </div>
                    <div class="help-block with-errors"></div>
                    </div>

                    <div class="form-group">
                      <label class="col-md-4 control-label">Workshop Level</label>
                        <div class="col-md-4 selectContainer">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-list"></i></span>
                        <select name="level" disabled class="form-control input-lg selectpicker" required data-required-error="Please select a level.">
                          <option value="" default>please select</option>
                          <option value="2{c+-L2}">Level 2</option>
                          <option value="3{c+-L3}">Level 3</option>
                          <option value="4{c+-L4}">Level 4</option>
                        </select>
                      </div>
                    </div>
                    <div class="help-block with-errors"></div>
                    </div>

                    <!-- radio checks -->
                    <div class="row">
                      <input type="hidden" name="2:owner" class="inVisibleOwnerField" />
                      <input type="hidden" name="2:role" class="inVisibleOwnerField" />
                      <input type="hidden" disabled name="2:name" value="Styling Workshop" />
                      <input type="hidden" disabled name="2:price" value="35" />
                      <input type="hidden" disabled name="2:code" value="CS17STYLE" />

                      <div class="col-xs-3">
                        <input type="checkbox" name="2:quantity" value="1" class="pull-right"/>
                      </div>
                        <div class="col-xs-9">
                          <h4>Extra Styling Workshop (EUR 35)</h4>
                          <p>Get your groove on :)</p>
                        </div>
                    </div>

                </div>
                <!-- /.row -->
              </div>
          </div>
      </div>
      <div class="panel panel-default">
          <div class="panel-heading">
              <h4 class="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#partyPass" id="partyPassLink">2. Party Pass Only (EUR 80)</a>
              </h4>
          </div>
          <div id="partyPass" class="panel-collapse collapse">
              <div class="panel-body">
                <div class="row">
                  <div class="col-md-3">
                    <input type="checkbox" id="fake" class="pull-right" required checked disabled/>
                  </div>
                    <div class="col-md-9">
                      <h4>Early Bird workshop Pass (EUR 85)</h4>
                      <p>Three Awesome Parties await you.</p>
                    </div>

                    <input type="hidden" disabled name="name" value="Party Pass" />
                    <input type="hidden" disabled name="price" value="80" />
                    <input type="hidden" disabled name="code" value="CS17PARTY" />

                </div>
                <!-- /.row -->
              </div>
          </div>
      </div>
    </div>




<!-- Success message -->
<!-- <div class="alert alert-success" role="alert" id="success_message">Success <i class="glyphicon glyphicon-thumbs-up"></i> Thanks for contacting us, we will get back to you shortly.</div> -->

<!-- Button -->
<div class="form-group">
  <label class="col-md-4 control-label"></label>
  <div class="col-md-4">
    <button type="submit" disabled class="btn btn-lg btn-danger" id="wrkshpFormSubmit">Add Tickets to Cart <span class="glyphicon glyphicon-chevron-right"></span></button>
  </div>
</div>

</fieldset>
</form>
