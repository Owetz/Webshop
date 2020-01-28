import React, {useState} from 'react';
import './AddProductForm.css';

const AddProductForm = () => {

    const [ProductName, setProductName] = useState();
    const [Description, setDescription] = useState();
    const [Price, setPrice] = useState(0);
    const [Image, setImage] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        let product = {ArticleName:ProductName,Price:Price,Description:Description,Image:Image};
        try {
            fetch('https://localhost:5001/products', {
                method: 'POST',
                mode: 'cors',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify(product),
            });
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e) => {
      setImage(e.target.files[0].name);
    }

    return (
        <>
        <h4>Add Products:</h4>
        <form className="" onSubmit={handleSubmit}>
        <label>
          Article Name:
          <input type="text" name="pName" id="pName" value={ProductName} onChange={e => setProductName(e.target.value)} />
        </label>
        <label>
          Description:<br/>
          <textarea name="pDesc" id="pDesc" cols="20" rows="5" value={Description} onChange={e => setDescription(e.target.value)} ></textarea>
        </label>
        <label>
          Price:
          <input type="number" name="pPrice" id="pPrice" value={Price} onChange={e => setPrice(e.target.value)} />
        </label>
        <label>
            Photo:
            <input type="file" name="pImage" id="pImage" onChange={handleChange}/>
        </label>
        <div>
          <input type="reset" value="Reset Form" />
          <input type="submit" value="Add product"/>
        </div>
      </form>
      </>
    );
}

export default AddProductForm;