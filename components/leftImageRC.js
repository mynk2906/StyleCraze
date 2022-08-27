let leftImageRC = (heading,image)=>{
    return  `
    <div class="container-fluid">
          <div class="row">
              <div class="col-lg-10 m-auto">
                  <div class="">
                      <div class="row">
                          <div class="col-12">
                            <div class="text-center mb-5">
                              <h1>${heading}</h1>
                              <div class="text-center border-top border-3  m-auto border-width border-danger"></div>
                            </div>
                          </div>
  
                          <div class="col-md-8">
                              <div class="card border-0" >
                                <img class="card-img-top " src="${image}">
                              </div>
                          </div>
                          <div class="col-md-4 p-4 m-md-auto">
                              <div class="card border-0 " >
                                <div></div>
                                <div class="card-body p-0">
                                  <h3>How To Apply Makeup Like A Pro – A Step By Step Tutorial</h3>
                                  <p class="fs-20">“There is no right or wrong way to apply makeup. Makeup is self-expression!”, says Lindsay Kastuk, a commercial and editorial makeup artist based in New York City. No thumb rule can decide what will enhance your favorite features and create</p>
                                  <p class="fw-bold text-danger"><span class="text-secondary">By</span> Shalini Roy</p>
                                </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>`
}

let threeImages = (one,two,three)=>{
    return`
    <div class="container-fluid">
          <div class="row">
              <div class="col-lg-10 m-auto">
                  <div class="">
                      <div class="row ">
                          <div class="col-md-4 ">
                              <div class="card border-0" >
                                <img class="card-img-top " src="${one}">
                                <div class="card-body">
                                  <h3 class="card-text fw-bold">6 Best Ways To Dry Your Nail Polish Faster</h3>
                                  <p class="fw-bold text-danger mt-3"><span class="text-secondary">By</span> Esha Saxena</p>
                                </div>
                              </div>
                          </div>
                         
                          <div class="col-md-4 ">
                              <div class="card border-0" >
                                <img class="card-img-top " src="${two}">
                                <div class="card-body">
                                  <h3 class="card-text fw-bold">6 Best Ways To Dry Your Nail Polish Faster</h3>
                                  <p class="fw-bold text-danger mt-3"><span class="text-secondary">By</span> Esha Saxena</p>
                                </div>
                              </div>
                          </div>
                          <div class="col-md-4 ">
                              <div class="card border-0" >
                                <img class="card-img-top " src="${three}">
                                <div class="card-body">
                                  <h3 class="card-text fw-bold">6 Best Ways To Dry Your Nail Polish Faster</h3>
                                  <p class="fw-bold text-danger mt-3"><span class="text-secondary">By</span> Esha Saxena</p>
                                </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>`
}

export {leftImageRC,threeImages};