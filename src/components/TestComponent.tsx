import styled from "styled-components";
import styles from './TestComponent.module.scss';

function TestComponent() {
  // Use Title and Wrapper like any other React component – except they're styled!
  return (
      <div className={styles.title}>
        <h1>Hello World!</h1>
     </div>
  );
}

export default TestComponent;
