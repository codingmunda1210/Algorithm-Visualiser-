//Merged sort is basically based on DIVIDE AND CONQUER RULE
// First we have to divide the whole array into smaller parts.
//a. si --> mid and another one is b. mid+1 --> ei
//Then we have to follow this steps until we get a single elements
//then we have to sort that indivitual arrays
//then put it into an empty array which is a merged array and a sorted array too
//this is the conquer step and thus we can easily do the merge sort

var beep = new Audio('beep3.mp3')
var mouseclick = new Audio('Mouseclick.mp3')
var done = new Audio('wrong.mp3')
const MergeSortButton = document.querySelector(".MergeSort");

MergeSortButton.addEventListener('click', async function () {
   // headingchange1.textContent = "Merge Sort";
   selectText.innerHTML = `Merge Sort..`
   mouseclick.play()
   const description = document.querySelector('#description')
   description.style.display = 'flex'
   const section = document.querySelector('#fullbody')
   section.style.height = '184vh'

   await descriptionText_merge();
   let element = document.querySelectorAll('.bar');
   let si = 0;
   let ei = parseInt(element.length) - 1;
   disableSortingBtn();
   disableSizeSlider();
   disableNewArrayBtn();

   await MergeSort(element, si, ei);
   selectText.innerHTML=`Sorting Complete!`
   done.play();
   // enableSortingBtn();
   // enableSizeSlider();
   enableNewArrayBtn();

});



async function descriptionText_merge() {
   const section = document.querySelector('#fullbody')
   section.style.height = `184vh`

   const description = document.querySelector('#description')
   description.style.display = 'flex'

   const code = document.querySelector('#code_java')
    // console.log(code.innerHTML)
    code.innerHTML = `
// CPP program for Merge Sort 

#include <iostream>
#include <vector>
using namespace std;

// Function to merge two subarrays of arr[]
void merge(vector<int>& arr, int low, int mid, int high) {
    vector <int> temp;
    int left = low, right = mid + 1;

    // Merge the two subarrays into temp
    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push_back(arr[left++]);
        } else {
            temp.push_back(arr[right++]);
        }
    }

    // Copy remaining elements of the left subarray
    while (left <= mid) {
        temp.push_back(arr[left++]);
    }

    // Copy remaining elements of the right subarray
    while (right <= high) {
        temp.push_back(arr[right++]);
    }

    // Copy the merged elements back into the original array
    for (int i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }
}

// Recursive mergesort function
void mergesort(vector<int>& arr, int low, int high) {
    if (low >= high) return;

    int mid = (low + high) / 2;

    // Sort the first half
    mergesort(arr, low, mid);

    // Sort the second half
    mergesort(arr, mid + 1, high);

    // Merge the sorted halves
    merge(arr, low, mid, high);
}

// Driver function to test the above
int main() {
    vector<int> arr = {12, 11, 13, 5, 6, 7};

    cout << "Given Array: ";
    for (int num : arr) {
        cout << num << " ";
    }
    cout << endl;

    // Call the mergesort function
    mergesort(arr, 0, arr.size() - 1);

    cout << "Sorted Array: ";
    for (int num : arr) {
        cout << num << " ";
    }
    cout << endl;

    return 0;
}


`

   const time = document.querySelector('#time')
   time.innerHTML = `
Merge Sort -

Worst Case - Scenario: Any input since it always divides into halves.
Time Complexity: O(n log n)

Average Case - Scenario: Any input since it always divides into halves.
Time Complexity: O(n log n)

Best Case - Scenario: Any input since it always divides into halves.
Time Complexity: O(n log n)


`

   const space = document.querySelector('#space')
   space.innerHTML = `
Merge Sort -

Worst Case - Scenario: Any input since it always divides into halves.
Space Complexity: O(n)

Average Case - Scenario: Any input since it always divides into halves.
Space Complexity: O(n)

Best Case - Scenario: Any input since it always divides into halves.
Space Complexity: O(n)


`


}









//Divide

async function MergeSort(element, si, ei) {
   if (si >= ei) {
      return;

   }
   const middle = si + Math.floor((ei - si) / 2);
   await MergeSort(element, si, middle);
   await MergeSort(element, middle + 1, ei);

   await Merge(element, si, middle, ei);          // si--> starting index and ei --> ending index

}

//Conquer

async function Merge(element, low, mid, high) {


   const a1 = mid - low + 1;
   const a2 = high - mid;
   let left = new Array(a1);
   let right = new Array(a2);

   for (let i = 0; i < a1; i++) {
      await waitforme(delay);
      beep.play();
      element[low + i].style.background = 'red';
      left[i] = element[low + i].style.height;


   }


   for (let i = 0; i < a2; i++) {
      await waitforme(delay);
      beep.play();
      element[mid + 1 + i].style.background = 'yellow';
      right[i] = element[mid + 1 + i].style.height;
   }
   await waitforme(delay);



   let i = 0, j = 0, k = low;
   while (i < a1 && j < a2) {
      beep.play();
      await waitforme(delay);
      if (parseInt(left[i]) <= parseInt(right[j])) {
         if ((a1 + a2) === element.length) {
            element[k].style.background = 'rgb(0,255,0)';
         }

         else {
            element[k].style.background = 'lightgreen';



         }

         element[k].style.height = left[i];

         i++;
         k++;

      }

      else {
         if ((a1 + a2) === element.length) {
            element[k].style.background = 'rgb(0,255,0)';
         }
         else {
            element[k].style.background = 'lightgreen';
         }

         element[k].style.height = right[j];
         j++;
         k++;
      }

   }
   while (i < a1) {
      beep.play();
      await waitforme(delay);
      if ((a1 + a2) === element.length) {
         element[k].style.background = 'rgb(0,255,0)';
      }
      else {
         element[k].style.background = 'lightgreen';

      }
      element[k].style.height = left[i];
      i++;
      k++;
   }

   while (j < a2) {
      beep.play();
      await waitforme(delay);
      if ((a1 + a2) === element.length) {
         element[k].style.background = 'rgb(0,255,0)';
      }
      else {
         element[k].style.background = 'lightgreen';

      }

      element[k].style.height = right[j];
      j++;
      k++;
   }

}

