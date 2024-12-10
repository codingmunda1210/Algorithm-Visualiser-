var beep = new Audio('beep3.mp3')
var mouseclick = new Audio('Mouseclick.mp3')
var done = new Audio('wrong.mp3')



const InsertionSortButton = document.querySelector(".InsertionSort");
InsertionSortButton.addEventListener('click', async function () {
    // headingchange1.textContent = "Insertion Sort";
    selectText.innerHTML = `Insertion Sort..`
    mouseclick.play()
    const description = document.querySelector('#description')
    description.style.display = 'flex'
    const section = document.querySelector('#fullbody')
    section.style.height = '184vh'
    await descriptionText_insertion();


    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await InsertionSort();
    // enableSortingBtn();
    // enableSizeSlider();
    enableNewArrayBtn();
});



async function descriptionText_insertion() {
    const section = document.querySelector('#fullbody')
    section.style.height = `184vh`

    const description = document.querySelector('#description')
    description.style.display = 'flex'

    const code = document.querySelector('#code_java')
    // console.log(code.innerHTML)
    code.innerHTML = `
// CPP program for implementation of Insertion Sort

#include <iostream>
using namespace std;

// Function to sort the array using insertion sort algorithm
void insertionSort(int arr[], int n) {
    // Loop through each element starting from the second element
    for (int i = 1; i < n; i++) {
        int j = i;

        // Shift elements of the sorted portion to the right to make space for arr[i]
        while (j > 0 && arr[j - 1] > arr[j]) {
            swap(arr[j], arr[j - 1]); // Swap elements if they are out of order
            j--; // Move leftward in the sorted portion
        }
    }
}

/* A utility function to print array of size n */
void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

// Driver method
int main() {
    int arr[] = {12, 11, 13, 5, 6};
    int n = sizeof(arr) / sizeof(arr[0]);

    insertionSort(arr, n);

    cout << "Sorted array: ";
    printArray(arr, n);

    return 0;
}



`
    const time = document.querySelector('#time')
    time.innerHTML = `
<b>Insertion Sort:</b>

Worst Case - Scenario: Array is sorted in reverse order.
Time Complexity: O(n^2)

Average Case - Scenario: Random order of elements.
Time Complexity: O(n^2)

Best Case - Scenario: Array is already sorted.
Time Complexity: O(n)


`

    const space = document.querySelector('#space')
    space.innerHTML = `
Insertion Sort -

Worst Case - Scenario: Array is sorted in reverse order.
Space Complexity: O(1)

Average Case - Scenario: Random order of elements.
Space Complexity: O(1)

Best Case - Scenario: Array is already sorted.
Space Complexity: O(1)



    `


}


async function InsertionSort() {
    const element = document.querySelectorAll('.bar');
    element[0].style.background = 'cyan';
    for (let i = 1; i < element.length; i++) {
        let j = i - 1;
        let p = element[i].style.height;
        element[i].style.background = 'rgb(250, 5, 54)';
        await waitforme(delay);

        while (j >= 0 && (parseInt(element[j].style.height) > parseInt(p))) {
            element[j].style.background = 'rgb(9, 102, 2)';
            element[j + 1].style.height = element[j].style.height;
            j--;
            beep.play();
            await waitforme(delay);

            for (let k = i; k >= 0; k--) {
                element[k].style.background = 'rgb(3, 252, 11)';

            }
        }
        element[j + 1].style.height = p;
        element[i].style.background = 'rgb(3, 252, 11)';
    }
    selectText.innerHTML=`Sorting Complete!`
    done.play();
}
