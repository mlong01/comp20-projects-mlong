#!/bin/bash
c=1
while [ $c -le 20 ]
do
    curl -X POST -H "Content-Type: application/json" -d '{"username":""","score":"98765432223456789", "grid":{"size":4,"cells":[[{"x":0,"y":0,"value":4,"previousPosition":{"x":0,"y":0},"mergedFrom":null},{"x":0,"y":1,"value":8,"previousPosition":{"x":0,"y":1},"mergedFrom":null},{"x":0,"y":2,"value":4,"previousPosition":null,"mergedFrom":[{"x":0,"y":2,"value":2,"previousPosition":{"x":0,"y":3},"mergedFrom":null},{"x":0,"y":2,"value":2,"previousPosition":{"x":0,"y":2},"mergedFrom":null}]},{"x":0,"y":3,"value":2,"previousPosition":null,"mergedFrom":null}],[{"x":1,"y":0,"value":32,"previousPosition":{"x":1,"y":0},"mergedFrom":null},{"x":1,"y":1,"value":4,"previousPosition":{"x":1,"y":1},"mergedFrom":null},{"x":1,"y":2,"value":32,"previousPosition":{"x":1,"y":2},"mergedFrom":null},{"x":1,"y":3,"value":4,"previousPosition":{"x":1,"y":3},"mergedFrom":null}],[{"x":2,"y":0,"value":2,"previousPosition":{"x":2,"y":0},"mergedFrom":null},{"x":2,"y":1,"value":32,"previousPosition":{"x":2,"y":1},"mergedFrom":null},{"x":2,"y":2,"value":64,"previousPosition":{"x":2,"y":2},"mergedFrom":null},{"x":2,"y":3,"value":16,"previousPosition":{"x":2,"y":3},"mergedFrom":null}],[{"x":3,"y":0,"value":4,"previousPosition":{"x":3,"y":0},"mergedFrom":null},{"x":3,"y":1,"value":2,"previousPosition":{"x":3,"y":1},"mergedFrom":null},{"x":3,"y":2,"value":8,"previousPosition":{"x":3,"y":2},"mergedFrom":null},{"x":3,"y":3,"value":4,"previousPosition":{"x":3,"y":3},"mergedFrom":null}]]}}' http://infinite-stream-2374.herokuapp.com/submit.json
	(( c++ ))
done

