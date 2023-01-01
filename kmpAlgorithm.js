/**
  aabaabaaab


       i
  aabaaab
   j

  table = [0,1,0,1,2,2,3]
 */

// building prefix suffix table

function buildingPrefixTable(s) {
    const table = [0]
    let i = 1
    let j = 0
    while (i < s.length) {
        if (s[i] === s[j]) {
            j++;
            table[i] = j
            i++


        } else if (j > 0) {
            j = table[j - 1]

        } else {
            table[i] = 0;
            i++

        }


    }
    console.log(table);

}

buildingPrefixTable('aabaaab')