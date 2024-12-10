var beep = new Audio('beep3.mp3')
var mouseclick = new Audio('Mouseclick.mp3')
var done = new Audio('wrong.mp3')


const QuickSortbutton = document.querySelector(".QuickSort");
QuickSortbutton.addEventListener('click', async function () {
    selectText.innerHTML = `Quick Sort..`
    mouseclick.play()
    const description = document.querySelector('#description')
    description.style.display = 'flex'
    const section = document.querySelector('#fullbody')
    section.style.height = '184vh'
    await descriptionText_quick()
    let element = document.querySelectorAll('.bar');
    let low = 0;
    let high = element.length - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await quickSort(element, low, high);
    selectText.innerHTML=`Sorting Complete!`
    done.play();
    // enableSortingBtn();
    // enableSizeSlider();
    enableNewArrayBtn();
});




async function descriptionText_quick() {
    const section = document.querySelector('#fullbody')
    section.style.height = `184vh`

    const description = document.querySelector('#description')
    description.style.display = 'flex'

    const code = document.querySelector('#code_java')
    // console.log(code.innerHTML)
    code.innerHTML = `
// CPP implementation of QuickSort


#include <iostream>
#include <vector>
using namespace std;

// A utility function to swap two elements
void swap(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}

// Function to partition the array around the pivot
int partition(vector<int>& arr, int low, int high) {
    int pivot = arr[low];  // Choose the first element as the pivot
    int i = low;           // Pointer for the next element greater than the pivot
    int j = high;          // Pointer for the next element less than or equal to the pivot

    while (i < j) {
        // Increment i until an element greater than the pivot is found
        while (arr[i] <= pivot && i < high) {
            i++;
        }

        // Decrement j until an element less than or equal to the pivot is found
        while (arr[j] > pivot && j > low) {
            j--;
        }

        // If i and j haven't crossed, swap the elements at these indices
        if (i < j) {
            swap(arr[i], arr[j]);
        }
    }

    // Place the pivot in its correct position
    swap(arr[low], arr[j]);
    return j; // Return the index of the pivot
}

// Recursive quicksort function
void qs(vector<int>& arr, int low, int high) {
    if (low < high) {
        // Partition the array and get the pivot index
        int pivotIndex = partition(arr, low, high);

        // Recursively sort the elements before and after the partition
        qs(arr, low, pivotIndex - 1);
        qs(arr, pivotIndex + 1, high);
    }
}

// Function to initiate quicksort
void quickSort(vector<int>& arr) {
    qs(arr, 0, arr.size() - 1); // Call the recursive quicksort function
}

// Function to print the array
void printArray(const vector<int>& arr) {
    for (int num : arr) {
        cout << num << " ";
    }
    cout << endl;
}

// Driver code
int main() {
    vector<int> arr = {10, 7, 8, 9, 1, 5};

    cout << "Original array: ";
    printArray(arr);

    quickSort(arr);

    cout << "Sorted array: ";
    printArray(arr);

    return 0;
}




`
    const time = document.querySelector('#time')
    time.innerHTML = `
QuickSort - 

Worst Case - Scenario: Pivot is always the smallest or largest element (e.g., sorted array).
Time Complexity: O(n^2)

Average Case - Scenario: Pivot divides the array into uneven parts, e.g., n/9 and 9n/10.
Time Complexity: O(n log n)

Best Case - Scenario: Pivot always divides the array into two equal halves.
Time Complexity: O(n log n)

`

    const space = document.querySelector('#space')
    space.innerHTML = `
Quick Sort -

Worst Case - Scenario: Pivot is always the smallest or largest element (e.g., sorted array).
Space Complexity: O(n)

Average Case - Scenario: Pivot divides the array into uneven parts, e.g., n/9 and 9n/10.
Space Complexity: O(log n)

Best Case - Scenario: Pivot always divides the array into two equal halves.
Space Complexity: O(log n)


     `
}


async function partition(element, low, high) {
    beep.play();
    let i = low - 1;
    element[high].style.background = 'red';
    for (let j = low; j <= high - 1; j++) {
        beep.play();
        element[j].style.background = 'yellow';
        await waitforme(delay);

        if (parseInt(element[j].style.height) < parseInt(element[high].style.height)) {
            beep.play();
            i++;
            swapping(element[i], element[j]);

            element[i].style.background = 'orange';
            if (i != j) element[j].style.background = 'orange';

            await waitforme(delay);
        }
        else {
            beep.play();
            element[j].style.background = 'pink';
        }
    }
    i++;

    await waitforme(delay);
    swapping(element[i], element[high]);

    element[high].style.background = 'pink';
    element[i].style.background = 'green';
    element[i].style.color = 'white';


    await waitforme(delay);


    for (let k = 0; k < element.length; k++) {
        beep.play();
        if (element[k].style.background != 'green')
            element[k].style.background = 'cyan';
    }

    return i;
}



async function quickSort(element, low, high) {
    if (low < high) {
        beep.play();
        let pivot_index = await partition(element, low, high);
        await quickSort(element, low, pivot_index - 1);
        await quickSort(element, pivot_index + 1, high);
    }
    else {

        if (low >= 0 && high >= 0 && low < element.length && high < element.length) {
            beep.play();
            element[high].style.background = 'green';
            element[low].style.background = 'green';
            element[high].style.color = 'white';
            element[low].style.color = 'white';
        }
    }
}