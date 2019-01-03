<template>
    <div>
        w
    </div>
</template>
<script>
export default {
    name: "Axios",
    created() {
        let url = this.HOST + "/movie/top250";
        this.$axios.get(url,{
            params:{
                count:10,
                start: 0
            }
        })
        .then(res =>{
            console.log(res.data);
        })
        .catch(error =>{
            console.log(error);
            
        })
    },
}    
</script>
<style>

</style>
