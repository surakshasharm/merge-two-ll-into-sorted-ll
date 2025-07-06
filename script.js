function mergeLists() {
  const list1Input = document.getElementById("list1").value.trim();
  const list2Input = document.getElementById("list2").value.trim();

  if (!list1Input || !list2Input) {
    document.getElementById("result").innerText = "Please enter both lists.";
    return;
  }

  let list1 = list1Input.split(",").map(x => parseInt(x.trim())).filter(x => !isNaN(x));
  let list2 = list2Input.split(",").map(x => parseInt(x.trim())).filter(x => !isNaN(x));

  let i = 0, j = 0;
  const merged = [];

  while (i < list1.length && j < list2.length) {
    if (list1[i] <= list2[j]) {
      merged.push(list1[i++]);
    } else {
      merged.push(list2[j++]);
    }
  }

  while (i < list1.length) merged.push(list1[i++]);
  while (j < list2.length) merged.push(list2[j++]);

  document.getElementById("result").innerText = "Merged List: " + merged.join(", ");
}
