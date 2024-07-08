import React,{ useState} from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useChildformMutation } from '../features/slice/childFormApiSlice';

function Form() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    child_name: '',
    school_name: '',
    address: '',
    contact_number: '',
    postal_address: '',
    standard: '',
    division: '',
    role: '',
    product_id: '1',
    customer_id: '1',
  });
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [childform] = useChildformMutation();
  //for upload pics
  const handleFiles = (newFiles) => {
    console.log(`Received ${newFiles.length} files`);

    const dropZone = document.getElementById('dropZone');

    // Clear previous file names
    while (dropZone.firstChild) {
      dropZone.removeChild(dropZone.firstChild);
    }

    // Add the new file names
    Array.from(newFiles).forEach((file) => {
      const fileName = document.createElement('div');
      fileName.textContent = file.name;
      dropZone.appendChild(fileName);
    });

    setSelectedFiles(newFiles);

    //Display image previews
    const filePreviews = document.getElementById('dropZone');
    filePreviews.innerHTML = '';

    Array.from(newFiles).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = document.createElement('img');
        img.src = e.target.result;
        img.style.maxWidth = '200px'; // Adjust the width as needed
        img.style.maxHeight = '200px'; // Adjust the height as needed
        filePreviews.appendChild(img);
      };
      reader.readAsDataURL(file);
    });
  };
  
  const handleFileChange = (e) => {
    console.log('clicked');
    const files = e.target.files || [];
    handleFiles(Array.from(files));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({...prev, [name]:value}));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const newFiles = e.dataTransfer.files;
    handleFiles(newFiles);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  console.log(formData);
  const handleSubmit = async (e) => {
    console.log('submit clicked')
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
      // data.append('customer_id',customerId);
      // data.append('product_id',productId);
    }
    Array.from(selectedFiles).forEach((file) => {
      data.append('file', file);
    });
  console.log(data)
    try {
      const result = await childform(data);
      console.log('Response:', result);
      navigate('../addcart')
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
                 <section>
                    <div class="container">
                      <div class="row justify-content-center">
                        <div class="col-12 col-md-8 col-lg-8 col-xl-6">
                          <div class="row">
                            <div class="col text-center title my-4">
                              <h1>Child Details</h1>
                            </div>
                          </div>
                          <div class="">
                         {/* <!-- Product Card Container --> */}
                                <div class="card border-0">
                                    {/* <!-- Main Container --> */}
                                    <div class="">
                                    <div id="dropZone" class="drop-zone" onDrop={handleDrop} onDragOver={handleDragOver}
                                      style={{ cursor: 'pointer' }}>
                                        <div class="drop-zone-icons">
                                        <input
                        type="file" 
                        id="fileInput"
                        style={{ display: 'none' }}
                        multiple
                        onChange={handleFileChange}
                      />
                                        {/* <!-- <svg class="upload-icon" viewBox="0 0 24 24" fill="#FF5A5F"><path d="M12 6l-4 4h3v4h2v-4h3m-10 6v2h12v-2h-12z"></path></svg> --> */}
                                        </div>
                                        <span class="drop-zone-text" onClick={() => document.getElementById('fileInput').click()}> +upload <br/>Child photo<br/>(2 Max MB)</span>
                                    </div>
                                    </div>
                                </div>
                          </div>
                          <form onSubmit={handleSubmit}>
                          <div class="row align-items-center mt-3">
                            <div class="col ">
                              <input type="text" class="form-control" placeholder="Child Name" name="child_name" onChange={handleChange}/>
                            </div>
                          </div>
                          <div class="row align-items-center mt-4">
                            <div class="col">
                              <input type="text" class="form-control" placeholder="School Name (Optional)" name="school_name" onChange={handleChange}/>
                            </div>
                          </div>
                          <div class="row align-items-center mt-4">
                            <div class="col">
                              <input type="text" class="form-control" placeholder="Address (Optional)" name='address' onChange={handleChange}/>
                            </div>
                          </div>
                          <div class="row align-items-center mt-4">
                            <div class="col">
                              <input type="text" class="form-control" placeholder="Contact Number (Optional)" name="contact_number" onChange={handleChange}/>
                            </div>
                          </div>
                                    <div class="row align-items-center mt-4">
                            <div class="col">
                              <input type="text" class="form-control" placeholder="Postal Address" name='postal_address' onChange={handleChange}/>
                            </div>
                          </div>
                          <div class="row align-items-center mt-2 g-4">
                            <div class="col-12 col-md-4">
                              <input type="text" class="form-control" placeholder="Standard(Optional)" name='standard' onChange={handleChange}/>
                            </div>
                            <div class="col-12 col-md-4">
                              <input type="text" class="form-control" placeholder="Division(Optional)" name='division' onChange={handleChange}/>
                            </div>
                            <div class="col-12 col-md-4">
                                <input type="text" class="form-control" placeholder="Role(Optional)" name='role' onChange={handleChange}/>
                              </div>
                          </div>
                          <div class="row justify-content-start mb-3  mt-4 ">
                            <div class="">                
                              {/* <Link to="/addcart"> */}
                              <button type="submit" class="product-btn border-0 p-2 text-white rounded-5 w-100">Add to Cart</button>
                              {/* </Link> */}
                            </div>
                          </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </section>
    </>
  )
}

export default Form