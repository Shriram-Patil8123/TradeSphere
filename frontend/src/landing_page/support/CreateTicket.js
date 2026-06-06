import React from "react";

function CreateTicket() {
  return (
    <div>
      <div className="container">
        <div className="row">

          {/* LEFT PART */}
          <div className="col-8">

            <div className="accordion" id="main">

              {/* Account Opening */}
              <div className="box mt-5">
                <button
                  className="btn btn-light w-100 text-start"
                  data-bs-toggle="collapse"
                  data-bs-target="#one"
                > <i class="fa-solid fa-plus"></i> &nbsp;
                  Account Opening
                </button>

                <div id="one" className="collapse">
                  <div className="p-2">
                    
                    <a href="" style={{textDecoration: "none"}}>Resident individual</a> <br />
                    <a href="" style={{textDecoration: "none"}}>Minor</a> <br />
                    <a href="" style={{textDecoration: "none"}}>NRI</a> <br />
                    <a href="" style={{textDecoration: "none"}}>Company & LLP</a> <br />
                    
                  </div>
                </div>
              </div>

              {/* Zerodha Account */}
              <div className="box mt-2">
                <button
                  className="btn btn-light w-100 text-start"
                  data-bs-toggle="collapse"
                  data-bs-target="#two"
                ><i class="fa-solid fa-user"></i> &nbsp;
                  Your Zerodha Account
                </button>

                <div id="two" className="collapse">
                  <div className="p-2">
                     <a href="" style={{textDecoration: "none"}}>Your Profile</a> <br />
                    <a href="" style={{textDecoration: "none"}}>Account Modification</a> <br />
                    <a href="" style={{textDecoration: "none"}}>Client Master Report (CMR) and Depository Participant (DP)</a> <br />
                    <a href="" style={{textDecoration: "none"}}>Nomination</a> <br />
                    <a href="" style={{textDecoration: "none"}}>Transfer and conversion of securities</a> <br />
                  </div>
                </div>
              </div>

              {/* Kite */}
              <div className="box mt-2">
                <button
                  className="btn btn-light w-100 text-start"
                  data-bs-toggle="collapse"
                  data-bs-target="#three"
                ><i class="fa-solid fa-layer-group"></i> &nbsp;
                  Kite
                </button>

                <div id="three" className="collapse">
                  <div className="p-2">
                    <a href="" style={{textDecoration: "none"}}>IPO</a><br />
                    <a href="" style={{textDecoration: "none"}}>Trading FAQs</a><br />
                    <a href="" style={{textDecoration: "none"}}>Margins</a><br />
                    <a href="" style={{textDecoration: "none"}}>Charts and orders</a><br />
                    <a href="" style={{textDecoration: "none"}}>General</a><br />
                  </div>
                </div>
              </div>

              {/* Funds */}
              <div className="box mt-2">
                <button
                  className="btn btn-light w-100 text-start"
                  data-bs-toggle="collapse"
                  data-bs-target="#four"
                ><i class="fa-solid fa-indian-rupee-sign"></i> &nbsp;
                  Funds
                </button>

                <div id="four" className="collapse">
                  <div className="p-2">
                    <a href="" style={{textDecoration: "none"}}>Add money</a><br />
                    <a href="" style={{textDecoration: "none"}}>Withdraw money</a><br />
                    <a href="" style={{textDecoration: "none"}}>Bank accounts</a><br />
                    <a href="" style={{textDecoration: "none"}}>eMandates</a><br />
                  </div>
                </div>
              </div>

              {/* Console */}
              <div className="box mt-2">
                <button
                  className="btn btn-light w-100 text-start"
                  data-bs-toggle="collapse"
                  data-bs-target="#five"
                ><i class="fa-solid fa-circle-nodes"></i> &nbsp;
                  Console
                </button>

                <div id="five" className="collapse">
                  <div className="p-2">
                    <a href="" style={{textDecoration: "none"}}>Portfolio</a><br />
                    <a href="" style={{textDecoration: "none"}}>Corporate actions</a><br />
                    <a href="" style={{textDecoration: "none"}}>Reports</a><br />
                    <a href="" style={{textDecoration: "none"}}>Segments</a><br />
                  </div>
                </div>
              </div>

              {/* Coin */}
              <div className="box mt-2">
                <button
                  className="btn btn-light w-100 text-start"
                  data-bs-toggle="collapse"
                  data-bs-target="#six"
                ><i class="fa-brands fa-confluence"></i> &nbsp;
                  Coin
                </button>

                <div id="six" className="collapse">
                  <div className="p-2">
                    <a href="" style={{textDecoration: "none"}}>Mutual funds</a><br />
                    <a href="" style={{textDecoration: "none"}}>NPS</a><br />
                    <a href="" style={{textDecoration: "none"}}>Fixed Deposit</a><br />
                    <a href="" style={{textDecoration: "none"}}>Payments</a><br />
                    <a href="" style={{textDecoration: "none"}}>General</a><br />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
<div className="col-4">

  {/* Notice Box */}
  <div
    className="p-3 mt-5 mb-3"
    style={{
      background: "#fff6e5",
      borderLeft: "4px solid orange"
    }}
  >
    Due to high volume,
    <span className="text-primary"> reactivation </span>
    requests may take an extra 24-48 business hours to process.
  </div>

  {/* Quick Links Box */}
  <div className="border">

    <div className="p-2 bg-light">
      <b>Quick links</b>
    </div>

    <div className="p-2">
      <a href="#" className="text-primary d-block mb-2" style={{textDecoration: "none"}}>
        1. Track account opening
      </a>

      <a href="#" className="text-primary d-block mb-2" style={{textDecoration: "none"}}>
        2. Track segment activation
      </a>

      <a href="#" className="text-primary d-block mb-2" style={{textDecoration: "none"}}>
        3. Intraday margins
      </a>

      <a href="#" className="text-primary d-block mb-2" style={{textDecoration: "none"}}>
        4. Kite user manual
      </a>

      <a href="#" className="text-primary d-block" style={{textDecoration: "none"}}>
        5. Learn how to create a ticket
      </a>
    </div>

  </div>

</div>


        </div>
      </div>

    </div>
  );
}

export default CreateTicket;
