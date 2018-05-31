<!-- React component to show Catalog-->
<?php
    $catalog_options = json_encode($catalog_options);
    $filters = json_encode(explode(' ',$filters));
?>
<div class="showcase-module">
    <?php if(!empty($header_opt)):?>
        <div class="catalog-title-wrapper">
            <?php if(in_array('show_title',$header_opt)):?>
                <div class="catalog-title"><?=$title_content;?></div>
            <?php endif;?>
            <?php if(in_array('show_subtitle',$header_opt)):?>
                <div class="catalog-subtitle"><?=$subtitle_content;?></div>
            <?php endif;?>
        </div>
    <?php endif;?>
    <div id="catalogApp"
         data-options=<?=$catalog_options?>
         data-filters=<?=$filters?>></div>
</div>