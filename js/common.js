function createBoard(value = 0) { 
    return new Array(colCount * rowCount).fill(value); 
    
}function getBoardIndex(colIndex, rowIndex) {
    
    if( rowIndex < 0 || rowIndex > 5 ) {
       return -1;  
    }    
        else if ( colIndex < 0 || colIndex > 6) {
        return -1;
        }   
    
    return rowIndex * colCount + colIndex;

}




