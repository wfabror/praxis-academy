<template>
    <div class="about">
        <h1>INI CONTOH</h1>
        <div class="kotak"> 
            <div class="padding">
                <div class="kotak2"> ini formulir</div>
            </div>
            
            <!-- <div class="box-login"></div> -->
        </div>
    </div>
</template>

<style> 

.kotak{
    position: relative;
    display: block;
    margin: 0 auto;
    width: auto;
    max-width: 920px;
    height: auto;
    min-height: 460px;
    border: 1px solid #dadce0;
    -moz-border-radius: 20px;
    border-radius: 20px;
    box-shadow: 0px 4px 45px rgba(0, 0, 0, 0.25);
    
}

.padding{
    padding-right: 460px;
}

.kotak2{
    position: relative;
    display: block;
    top: 80px;
    left: 0px;
    margin: auto;
    width: auto;
    max-width: 460px;
    height: auto;
    min-height: 230px;
    border: 1px solid #dadce0;
    -moz-border-radius: 20px;
    border-radius: 20px;
    box-shadow: 0px 4px 45px rgba(0, 0, 0, 0.25);
    
}

.border-login{
    flex-shrink: 0;
/* border: 1px solid #dadce0; */
    -moz-border-radius: 8px;
    border-radius: 8px;
    display: block;
    margin: 0 auto;
    min-height: 0;
    width: auto;
    max-width: 900px;
    border: 2px solid #dadce0;
}

.box-login{
    /* border: 15px solid green; */
    box-sizing: border-box;
    display: block;
    float: none;
    line-height: 20px;
    position: static;
    /* z-index: auto; */
    box-flex: 1;
    flex-grow: 1;   
    overflow: hidden;
        overflow-y: hidden;
    padding: 24px 24px 36px;   
    height: auto;
    min-height: 500px;
    overflow-y: auto;
}

</style>