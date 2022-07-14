import React, { useEffect, useState } from "react";
import "./Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./Component/Header";


const UseAPI = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    console.log(response);
    setUsers(await response.json());
  };

  useEffect(() => {
    getUsers();
  }, []);

  const removeElem = (id) => {
    const myNew = users.filter((curr) => {
      return curr.id !== id;
    });
    setUsers(myNew);
  };

  return (
    <>
     <Header/>

      {/*  */}
      <div class="head">Fake API Project</div>
      <div className="container">
        <div className="row">
          {users.map((curr) => (
            <>
              <div className="col-md-4 col-xs-12 col-sm-8">
                <div
                  class="card"
                  style={{
                    width: "18rem",
                    height: "450px",
                    margin: "10px",
                    border: "1px solid red",
                    backgroundColor: "pink",
                  }}
                >
                  <img
                    class="card-img-top"
                    src={curr.avatar_url}
                    alt="Card image cap"
                    style={{ width: "100%", padding: "5px" }}
                  />
                  <div class="card-body">
                    <h5 class="card-title">ID :{curr.id} </h5>
                    <p class="card-text">{curr.login}</p>
                    {/* <a href="#" class="btn btn-success">
                      View Profile
                    </a> */}
                    {/* --------------- */}

                    <button
                      type="button"
                      class="btn btn-primary"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      View Profile
                    </button>

                    <div
                      class="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                              View Profile
                            </h5>
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            <img src={curr.avatar_url} />
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="button" class="btn btn-primary">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* --------------- */}
                    <button
                      className="btn btn-danger m-2 "
                      onClick={() => removeElem(curr.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>

      
    </>
  );
};

export default UseAPI;
