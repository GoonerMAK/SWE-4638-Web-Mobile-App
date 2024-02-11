'use strict'
class TaskManager {
    constructor(tasksInfo, id, callback) {
      this.id = id;
      this.callback = callback;
      this.tasks = tasksInfo;
      this.currentDate = new Date(); 
    }
    
    render(date) {
      // console.log("Rendering tasks for date:", date);
      const tableContainer = document.getElementById(this.id + "Table");
      tableContainer.innerHTML = "";

      const table = document.createElement("table");
      table.setAttribute("border", "1");
      const headerRow = table.insertRow();
      headerRow.innerHTML = "<th rowspan='1' colspan='2'>Days</th><th rowspan='1' colspan='7'>Tasks</th>";

      for (let i = 0; i < 7; i++) {
        const currentDate = new Date(date);
        currentDate.setDate(date.getDate() + i);

        const dayRow = table.insertRow();
        dayRow.innerHTML = `<td rowspan='1' colspan='2'>${this.getDayName(currentDate)}</td>`;

        const dayTasks = this.tasks.filter(task => this.isSameDay(task.dueDate, currentDate));

        for (const task of dayTasks) {
          const taskCell = dayRow.insertCell();
          taskCell.innerHTML = `<span class="task-number" onclick="callback('${task.name}', '${task.dueDate}', ${task.priority})">${task.name}</span>`;
        }
      }

      tableContainer.appendChild(table);
	}
  
  getCurrentDate() {
    return this.currentDate;
  }

  getDayName(date) {
    const options = { weekday: 'long' };
    return date.toLocaleDateString('en-US', options);
  }
  
  isSameDay(date1, date2) {
    return date1.toDateString() === date2.toDateString();
  }

}

function callback(name, dueDate, priority) {
  console.log(`Task Info: ${name} / Due Date: ${dueDate} / Priority: ${priority}`);
}