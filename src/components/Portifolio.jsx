import React, { useState } from "react";
import './portifolio.css'

function Portifolio() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div>
            <div className="Portifolio-body">
                {selectedImage && (
                    <div>
                        <img className="img" alt="Selected Image" width="370px" height="340px"  src={URL.createObjectURL(selectedImage)} />

                        <button className="btn-del" onClick={() => setSelectedImage(null)}>Remove</button>
                    </div>
                )}

                <input className="add-img" type="file" name="myImage" onChange={(event) => {
                    setSelectedImage(event.target.files[0]);
                }} />
            </div>

        </div>
    );
};

export default Portifolio;