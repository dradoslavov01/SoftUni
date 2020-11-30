function solve(input) {
    let command = input.shift();
    let studentTickets = 0;
    let standardTickets = 0
    let kidTickets = 0;
    let totalTicket = 0;

    while (command != 'Finish') {
        let freePlaces = Number(input.shift());
        let typeTicket = input.shift();
        let sellTicket = 0;

        while (typeTicket != 'End') {
            if (typeTicket == 'student') {
                studentTickets++
            }else if (typeTicket == 'standard') {
                standardTickets++;
            }else {
                kidTickets++
            }
            sellTicket++;
            totalTicket++
             if (sellTicket >= freePlaces) {
                 break;
             }
             typeTicket = input.shift();
        }
        console.log(`${command} - ${((sellTicket / freePlaces) * 100).toFixed(2)}% full.`);
        command = input.shift();
        
    }
    console.log(`Total tickets: ${totalTicket}`);
    console.log(`${((studentTickets / totalTicket) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standardTickets / totalTicket) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidTickets / totalTicket) * 100).toFixed(2)}% kids tickets.`);
    
    
    
}
solve([
  'The Matrix', '20',
  'student',    'standard',
  'kid',        'kid',
  'student',    'student',
  'standard',   'student',
  'End',        'The Green Mile',
  '17',         'student',
  'standard',   'standard',
  'student',    'standard',
  'student',    'End',
  'Amadeus',    '3',
  'standard',   'standard',
  'standard',   'Finish'
]);