<?php get_header(); ?>
<section id="actu">

<?php
     $args = array(
         'post_type' => 'post',
         'posts_per_page' => 2,
         'order' => 'DESC'
     );
     $query = new WP_Query( $args );
      if ( $query->have_posts() ) :
 ?>
     <section class="container" id="actu">

         <?php
           $i=0;
           while ( $query->have_posts() ) : $query->the_post();
           $maclass = "alignleft";
           if($i == 1){$maclass = "alignright";}
           if($i == 0){$i = 1;}else{$i = 0;}
         ?>
         <article class="item clearfloat">
             <a href="<?php the_permalink(); ?>"><?php the_post_thumbnail('thumbnail', array('class' => $maclass));?></a>
             <a href="<?php the_permalink(); ?>"><h2 class="item-title"><?php the_title();?></h2></a>
             <div class="item-text"><?php the_excerpt(); ?></div>
         </article>

    </section>
         <?php endwhile; else : ?>
         <p><?php esc_html_e( 'Sorry, no posts matched your criteria.' ); ?></p>  <?php endif; ?>
</section>




<?php while(have_posts()):the_post(); ?>
<section id="about" class="clearfloat bg-purple-grad">
<!-- Positionnement des éléments en float avec une classe -->
  <div class="item col-one-third">
    <h2 class="item-title"><?php the_field('about-title-1') ?></h2>
    <?php
    $image = get_field('about-img-1');
    //print_r($image);
    if( !empty($image) ): ?>
    	<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
    <?php endif; ?>
    <p class="item-text"><?php the_field('about-text-1') ?></p>
  </div>
  <div class="item col-one-third">
    <h2 class="item-title"><?php the_field('about-title-2') ?></h2>
    <?php
    $image = get_field('about-img-2');
    if( !empty($image) ): ?>
    	<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
    <?php endif; ?>
    <p class="item-text"><?php the_field('about-text-1') ?></p>
  </div>
  <div class="item col-one-third">
    <h2 class="item-title"><?php the_field('about-title-3') ?></h2>
    <?php
    $image = get_field('about-img-3');
    if( !empty($image) ): ?>
    	<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
    <?php endif; ?>    <p class="item-text"><?php the_field('about-text-3') ?></p>
  </div>

</section>
<?php endwhile; ?>

<?php get_footer(); ?>
