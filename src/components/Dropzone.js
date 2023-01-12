import React, { useRef, useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';


const Dropzone = ({passDataImg, clear}) => {

    const [fileList, setFileList] = useState([]);

    useEffect(() => {
    
      clear? setFileList([]) : setFileList([...fileList])
    }, [clear])
    

  
      // useEffect(() => {
      //   passDataImg(fileList)
      // }, [fileList])
      
      const wrapperRef = useRef(null);

      const onDragEnter = () => wrapperRef.current.classList.add('opacity-60');
  
      const onDragLeave = () => wrapperRef.current.classList.remove('opacity-60');
  
      const onDrop = () => wrapperRef.current.classList.remove('opacity-60');
  
      const [fileFormDatas, setFileFormDatas] = useState([])

      const getBase64 = file => {
        return new Promise(resolve => {
          let fileInfo;
          let baseURL = "";
          // Make new FileReader
          let reader = new FileReader();
    
          // Convert the file to base64 text
          reader.readAsDataURL(file);
    
          // on reader load somthing...
          reader.onload = () => {
            // Make a fileInfo Object
            // console.log("Called", reader);
            baseURL = reader.result;
            // console.log(baseURL);
            resolve(baseURL);
          };
          // console.log(fileInfo);
        });
      };

      const onFileDrop = async (e) => {
        const newFile = Object.values(e.target.files);

        

        let theFiles = [];
        if (newFile) {
          const updatedList = [...fileList, newFile.map(file => 
            Object.assign(file,{
                          preview:URL.createObjectURL(file)
                      })
                    )].flat();

                    setFileList(updatedList);
          for (const i of updatedList) {
            // console.log(i)

            const theBase = await getBase64(i)
            const newFile = new Object()
            newFile.file = theBase
            // console.log(newFile)
            theFiles = [...theFiles, newFile]
          }
          // console.log(theFiles)
        
          passDataImg(theFiles);

        }
      }

      const closeImg = async (idx) => {

       let theFiles = [];

        let filtered = fileList;
        delete filtered[idx]
        filtered = filtered.filter(x => x !== undefined && x !== null);

        for (const i of filtered) {
          const theBase = await getBase64(i)
          const newFile = new Object()
          newFile.file = theBase
          console.log(newFile)
          theFiles = [...theFiles,theBase]

      }
        setFileList(filtered)
        passDataImg(theFiles);

      
    }

      const selected_images = fileList.map((file, idx) => (
        <div className="m-2 group relative cursor-pointer" key={`file-${idx+1}`}>
          {/* {console.log(file)} */}
          <CloseIcon onClick={() => closeImg(idx)} fontSize="small" className="invisible group-hover:visible absolute text-gray-600 cursor-pointer hover:text-red-500 top-1 right-1"/>
          <img src={file.preview} style={{height:"75px"}} alt={file.name} />
      </div>
    ))

    
      return (
        <div className="w-full">

            <div 
              className='w-full flex items-center  cursor-pointer justify-center h-16 border-dashed border-2 border-gray-300 relative' 
              // {...getRootProps()}
              ref={wrapperRef}
              onDragEnter={onDragEnter}
              onDragLeave={onDragLeave}
              onDrop={onDrop}
              >
            {/* <input {...getInputProps()} /> */}
            <input type="file" value="" multiple onChange={onFileDrop} 
              className="w-full h-full cursor-pointer absolute top-0 bottom-0 right-0 left-0 opacity-0"
            />

            {
                <p className='text-slate-500'>Drop the files here ...</p>
                }
            </div>
            <div className="flex flex-wrap">

            {selected_images}
            </div>
        </div>
      )
    }

    Dropzone.propTypes = {
      passDataImg: PropTypes.func
  }
  

export default Dropzone