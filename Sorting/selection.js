var beep = new Audio('beep3.mp3')
var mouseclick = new Audio('Mouseclick.mp3')
var done = new Audio('wrong.mp3')

const SelectionSortButton = document.querySelector(".SelectionSort");
SelectionSortButton.addEventListener('click', async function () {
    // headingchange1.textContent = "Selection Sort";
    selectText.innerHTML = `Selection Sort..`
    mouseclick.play()
    const description = document.querySelector('#description')
    description.style.display = 'flex'
    const section = document.querySelector('#fullbody')
    section.style.height = '184vh'
    await descriptionText_selection();


    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();

    await SelectionSort();
    // enableSortingBtn();
    // enableSizeSlider();
    enableNewArrayBtn();
});

async function descriptionText_selection() {
    const section = document.querySelector('#fullbody')
    section.style.height = `184vh`

    const description = document.querySelector('#description')
    description.style.display = 'flex'

    const code = document.querySelector('#code_java')
    // console.log(code.innerHTML)
    code.innerText = `
    
// CPP program for implementation of Selection Sort

#include <iostream>
using namespace std;

// Function to implement Selection Sort
void selectionSort(int arr[], int n) {
    // Outer loop iterates over the unsorted portion of the array
    for (int i = 0; i < n - 1; i++) {
        // Find the minimum element in unsorted array
        int min_idx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }

        // Swap the found minimum element with the first element
        int temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
}

// Function to print the array
void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

// Driver code to test the above
int main() {
    int arr[] = {64, 25, 12, 22, 11};
    int n = sizeof(arr) / sizeof(arr[0]);

    cout << "Original array: ";
    printArray(arr, n);

    selectionSort(arr, n);

    cout << "Sorted array: ";
    printArray(arr, n);

    return 0;
}

    
`
    const time = document.querySelector('#time')
    time.innerHTML = `
<b>Selection Sort:</b>

Worst Case - Scenario: Array is in reverse order or random order.
Time Complexity: O(n^2)

Average Case - Scenario: Random order of elements.
Time Complexity: O(n^2)

Best Case - Scenario: Array is already sorted (still requires scanning).
Time Complexity: O(n^2)


`

    const space = document.querySelector('#space')
    space.innerHTML = `
Selection Sort -

Worst Case - Scenario: Array is in reverse order or random order.
Space Complexity: O(1)

Average Case - Scenario: Random order of elements.
Space Complexity: O(1)

Best Case - Scenario: Array is already sorted (still requires scanning).
Space Complexity: O(1)
 `


}











async function SelectionSort() {
    const element = document.querySelectorAll(".bar");
    for (let i = 0; i < element.length; i++) {
        let smallest_element_index = i;
        element[i].style.background = 'rgb(250, 5, 54)';
        for (let j = i + 1; j < element.length; j++) {
            element[j].style.background = 'rgb(245, 212, 24)';
            await waitforme(delay);

            if (parseInt(element[j].style.height) < parseInt(element[smallest_element_index].style.height)) {
                if (smallest_element_index !== i) {
                    element[smallest_element_index].style.background = 'cyan'; // 
                }
                smallest_element_index = j;
            }
            else {
                element[j].style.background = 'cyan'; //
            }
        }
        beep.play()
        await waitforme(delay);
        swapping(element[smallest_element_index], element[i]);
        element[smallest_element_index].style.background = 'cyan';
        element[i].style.background = 'rgb(0,255,0)';
    }
    selectText.innerHTML=`Sorting Complete!`
    done.play();
}