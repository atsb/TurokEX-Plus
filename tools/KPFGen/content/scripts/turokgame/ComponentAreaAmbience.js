//-----------------------------------------------------------------------------
//
// ComponentAreaAmbience.js
// DESCRIPTION:
//
//-----------------------------------------------------------------------------

ComponentAreaAmbience = class.extendStatic(ComponentArea);

class.properties(ComponentAreaAmbience,
{
    //------------------------------------------------------------------------
    // VARS
    //------------------------------------------------------------------------
    
    randFactor : 0,
    counter : 0,
    sounds : null,
    active : true,
    
    //------------------------------------------------------------------------
    // FUNCTIONS
    //------------------------------------------------------------------------
    
    onLocalTick : function()
    {
        if(this.sounds == null || this.sounds.length <= 0)
            return;
            
        this.counter++;
        
        if(this.counter % 60 != 0)
            return;
        
        if(Sys.rand(100) < this.randFactor)
            Snd.play(this.sounds[Sys.rand(this.sounds.length)]);
    }
});
