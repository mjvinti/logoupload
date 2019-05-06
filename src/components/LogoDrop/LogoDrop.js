import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { uploadLogo } from '../../actions';

import styles from './LogoDrop.module.css';

const imgMaxSize = 1000000;
const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: black;
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border .24s ease-in-out;
  width: 75%;
  height: 50%;
  margin-left: auto;
  margin-right: auto;
`;

class LogoDrop extends Component {
  onDrop = (files, rejectedFiles) => {
    if (rejectedFiles && rejectedFiles.length > 0) {
      let rejectFile = rejectedFiles[0];
      let rejectFileSize = rejectFile.size;

      if (rejectFileSize > imgMaxSize) {
        alert('The file size is too big! 1 MB Limit!')
        return false
      }
    }

    const currentFile = files[0];
    const myFileItemReader = new FileReader()
    myFileItemReader.addEventListener('load', () =>{
      this.props.uploadLogo(myFileItemReader.result);
    }, false);
    myFileItemReader.readAsDataURL(currentFile);
  }
  
  render() {
    return (
      <div className={styles.logodrop}>
        <h2>Drop Logo Here</h2>
        <Container>
          <Dropzone
            onDrop={this.onDrop}
            maxSize={imgMaxSize}
            multiple={false}
            accept='image/*'
          >
            {({ getRootProps, getInputProps, isDragActive }) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                { isDragActive ? "Drop it like it's hot" : "Click me or drag a file to upload (1 MB Limit)" }
              </div>
            )}
          </Dropzone>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { uploadedLogo: state.uploadedLogo };
} 

export default connect(
  mapStateToProps,
  { uploadLogo }
)(LogoDrop);