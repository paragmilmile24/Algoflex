import { Container } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { useControls, useData } from "../common/store";
import QuickSort from "../QuickSort.jpg";
import BubbleSort from "../BubbleSort.png";
import InsertionSort from "../InsertionSort.png";
import MergeSort from "../MergeSort.jpg";
import SelectionSort from "../SelectionSort.jpg";
import HeapSort from "../HeapSort.jpg";

const FooterDiv = styled.div`
  // display: flex;
  justify-content: center;
  align-items: center;
  // position: absolute;
  // bottom: -40px;
  width: 100%;
  marginTop : 100;
`;

const Image = () =>{

  const [algorithm] = useData(
    (state) => [ state.algorithm]
  );
  
  switch(algorithm){
    case 0 :  return (
                <Container>
                <center>
                  <h2>Bubble Sort</h2>
                </center>
                <h4>Bubble sort works on the repeatedly swapping of adjacent elements until they 
                  are not in the intended order. It is called bubble sort because the movement of 
                  array elements is just like the movement of air bubbles in the water. 
                  Bubbles in water rise up to the surface;
                   similarly, the array elements in bubble sort move to the end in each iteration.</h4>
                <h4>Time Complexity : O(n^2)</h4>
                <h4>Space Complexity : O(1) </h4>
                <center>
                <img src= {BubbleSort} alt="Algo Image" />
                </center>
                </Container>
              )
              break;

    case 1 : return(
            <Container>
            <center>
              <h2>Selection Sort</h2>
            </center>
            <h4>The selection sort algorithm sorts an array by repeatedly finding the minimum element 
              (considering ascending order) from unsorted part and putting it at the beginning. <br/>
              The algorithm maintains two subarrays in a given array.<br/>
                  1) The subarray which is already sorted. <br/>
                  2) Remaining subarray which is unsorted.<br/>
              In every iteration of selection sort, the minimum element (considering ascending order) 
              from the unsorted subarray is picked and moved to the sorted subarray.</h4>
              <h4>Time Complexity : O(n^2)</h4>
              <h4>Space Complexity : O(1) </h4>
              <center>
              <img src= {SelectionSort} alt="Algo Image" />
              </center>
              </Container>
            ) 
            break;
    case 2 : return (
                    <Container>
                    <center>
                      <h2>Insertion Sort</h2>
                    </center>
                    <h4>Insertion sort is a sorting algorithm that places an unsorted element at its 
                      suitable place in each iteration. 
                      <br/>Insertion sort works similarly as we sort cards in our hand in a card game.

                      <br/>We assume that the first card is already sorted then, we select an unsorted card. 
                      If the unsorted card is greater than the card in hand, it is placed on the right 
                      otherwise, to the left. In the same way, other unsorted cards are taken and put in 
                      their right place.</h4>
                    <h4>Time Complexity : O(n^2)</h4>
                    <h4>Space Complexity : O(1) </h4>
                    <center>
                    <img src= {InsertionSort} alt="Insertion Sort Image" />
                    </center>
                    </Container>
                  )
                  break;
    
    case 3 : return(
              <Container>
              <center>
                <h2>Heap Sort</h2>
              </center>
              <h4>Heap Sort algorithm consists of two parts- Converting the List into a heap and adding the 
                max element from heap to the end list, while maintaining heap structure.
                For easy implementation, we use a max-heap structure, where the max value always exists at the root.
                After Converting the list into heap, we take the max element from it and add it to the end of the list.
                We repeat this process till number of elements in the heap becomes zero.</h4>
                <h4>Time Complexity : O(nlogn)</h4>
                <h4>Space Complexity : O(1) </h4>
                <center>
                <img src= {HeapSort} alt="Algo Image" />
                </center>
                </Container>
              )
          break;

    case 4 : return(
              <Container>
              <center>
                <h2>Merge Sort</h2>
              </center>
              <h4>Merge sort is one of the most efficient sorting algorithms. It works on the principle of Divide and Conquer 
                based on the idea of breaking down a list into several sub-lists until each sublist consists of a single element 
                and merging those sublists in a manner that results into a sorted list.</h4>
                <h4>Time Complexity : O(nlogn)</h4>
                <h4>Space Complexity : O(n) </h4>
                <center>
                <img src= {MergeSort} alt="Algo Image" />
                </center>
                </Container>
              )
          break;
    
    case 5 : return(
              <Container>
              <center>
                <h2>Quick Sort</h2>
              </center>
              <h4>Quick Sort is a sorting algorithm which uses divide and conquer technique.
                In quick sort we choose an element as a pivot and we create a partition of array around that pivot, 
                by repeating this technique for each partition we get our array sorted</h4>
                <h4>Time Complexity : O(nlogn)</h4>
                <h4>Space Complexity : O(n) </h4>
                <center>
                <img src= {QuickSort} alt="Algo Image" />
                </center>
                </Container>
              )
          break;
    
  }

}

export function Footer() {

  const [algorithm] = useData(
    (state) => [ state.algorithm]
  );

  const source="abc";
  const value =algorithm;
  // alert(source + value);

  // switch(value){
  //   case 0 : source="src\BubbleSort.PNG";
  //             break;

  //   case 1 : source = "cover.png";
  // }

  // alert(source + value);

  return (
    <FooterDiv>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color : "black",
          // backgroundColor : "#738c8e",
          fontSize : 25,
          marginTop : 50,
        }}
      >
        <h1 >Algorithm</h1>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color : "#f6a62b",
          // backgroundColor : "#738c8e",
          fontSize : 25,
        }}
      >
        
        {/* <img src= "src\BubbleSort.PNG" alt="Algo Image" /> */}
          <div style ={{justifyContent: "center",color:"black",}}>
            <Image />
          </div>
      </div>
      
    </FooterDiv>
  );
}
